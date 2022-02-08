import { Injectable, Inject } from '@nestjs/common'
import { Repository, QueryRunner } from 'typeorm'
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { User, IUser } from '../../models/user'
import { REPOSITORIES } from '../../constants'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { SubscriptionRecord } from 'src/models/subsciptionRecord';

@Injectable()
export class UserService extends TypeOrmCrudService<User>{
  constructor( 
    @InjectRepository(User) repo, 
    @InjectRepository(SubscriptionRecord) private readonly subrepo ) { 
    super(repo);
  }

  async addSubscription(request: any): Promise<any> {
    let user = await this.repo.findOne(request.id,{ relations: ['subscription']})
    const record = new SubscriptionRecord({user:user, access_group: request.access_group});
    user.subscription.push(record);
    await this.subrepo.save(record);
    user = await this.repo.save(user)
    user = await this.repo.findOne(request.id,{ relations: ['subscription']})
    return user
  }
}