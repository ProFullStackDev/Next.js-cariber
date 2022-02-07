import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { User, UserStatus } from '../models/user'
import { ERRORS } from '../constants'
import { AuthService } from './auth.service'

/**
 * Class local strategy
 *
 * @export
 * @class LocalStrategy
 * @extends {PassportStrategy(Strategy)}
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: false
    })
  }

  /**
   * Validate account
   *
   * @param {String} id
   * @param {String} password
   * @memberof LocalStrategy
   */
  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(email, password)
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