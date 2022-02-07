import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { AUTH_SECRET_TOKEN, ERRORS } from '../constants'
import { AuthPayload } from '../models/auth'
import { AuthService } from './auth.service'
import { UserStatus } from 'src/models/user'

/**
 * JwtStrategy is passport JWT strategy.
 * 
 * @export
 * @class JwtStrategy
 * @extends {PassportStrategy(Strategy)}
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: AUTH_SECRET_TOKEN,
    })
  }

  /**
   * validate returns jwt payload.
   * @param payload - Payload with the info of the user
   * 
   * @returns
   * @memberof JwtStrategy
   */
  async validate(payload: AuthPayload) {
    const user = await this.authService.validateUserByID(payload.sub)
    if (!user) {
      throw new UnauthorizedException()
    }
    console.log(user);
    if(user.status == UserStatus.Inactive){
      throw new UnauthorizedException(ERRORS.USER_INACTIVE)
    }
    return user
  }
}