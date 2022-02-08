import { Test, TestingModule } from '@nestjs/testing'
import { JwtService } from '@nestjs/jwt'

import { UserService } from '../repositories/user'
import { AuthService } from './auth.service'
import { User } from '../models/user'

describe('AuthService', () => {
  let service: AuthService
  const userService = { findOne: jest.fn(() => Promise.resolve(new User())) }
  const jwtService = { sign: jest.fn(({ sub }) => sub) }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtService,
        UserService,
        AuthService
      ],
    })
    .overrideProvider(JwtService).useValue(jwtService)
    .overrideProvider(UserService).useValue(userService)
    .compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should validate user', async () => {
    const id = '123'
    const password = '111'

    await service.validateUser(id, password).catch(() => null)
    
    expect(userService.findOne).toBeCalledWith(id)
  })

  it('should get access token', async () => {
    const userId = '123'
    const user = new User({ id: userId })
    const accessToken = userId

    const result = await service.getAccessToken(user)
    expect(result.access_token).toBe(accessToken)
    expect(jwtService.sign).toBeCalled()
  })
})
