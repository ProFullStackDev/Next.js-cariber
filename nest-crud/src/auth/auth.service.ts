import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { get, isEmpty } from 'lodash'

import { User } from '../models/user'
import { AuthToken, AuthPayload } from '../models/auth'
import { UserService } from '../repositories'
import { ERRORS } from '../constants'
import { comparePassword } from './utils'
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async validateUserByID(id: string): Promise<any> {
    
    const user = await this.userService.findOne(id, { relations: ['subscription', 'subscription.access_group'] })
    if (!user) return null
    else {
      
      delete user.password
      return user
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    console.log(email);
    
    const user = await this.userService.findOne({where: {email: email}})
    console.log(user);
    
    if (!user) return null
    else if (!isEmpty(user.password)) {
      const matchPassword = await comparePassword(password, user.password)
      console.log(password, user.password);
      
      if (matchPassword) {
        delete user.password
        return user
      }
    }
    throw new UnauthorizedException(ERRORS.USER_INVALID_PASSWORD)
  }

  async getAccessToken(user: User): Promise<AuthToken> {
    const payload: AuthPayload = { sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async userDetail(req) {
    return this.validateUserByID(req.id)
    
  }
}
