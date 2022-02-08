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
    
    const user = await this.userService.findOne(id, {
      join: { 
        alias: "user",
        innerJoinAndSelect: {
          "subscription": "user.subscription",
          "access_groups": "subscription.access_group",
          "course": "access_groups.course"
        },
    }}) as any
    let course_list = []
    user.subscription.forEach((record)=> { 
      record.access_group.course.forEach((course)=>{
            let course_mapping = {...course,duration:record.access_group.duration, subscript_date:record.subscription_date};
            course_list.push(course_mapping)
          })
    })
    const holder = {}
    course_list.forEach(function(d) {
      if (holder.hasOwnProperty(d.id)) {
        holder[d.id] = holder[d.id] + d.duration;
      } else {
        holder[d.id] = d.duration;
      }
    });
    console.log(holder);
    
    user.extra_field = course_list
    if (!user) return null
    else {
      
      delete user.password
      return user
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne({where: {email: email}})
    
    if (!user) return null
    else if (!isEmpty(user.password)) {
      const matchPassword = await comparePassword(password, user.password)
      
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
