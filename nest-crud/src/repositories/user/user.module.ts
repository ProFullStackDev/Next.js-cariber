import { Module } from '@nestjs/common'
import { DatabaseModule } from '../../database'
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from './user.service'
import { User } from 'src/models/user';
import { SubscriptionRecordModule } from '../subscriptionrecord';
import { SubscriptionRecord } from 'src/models/subsciptionRecord';

@Module({
  imports: [TypeOrmModule.forFeature([User, SubscriptionRecord])],
  providers: [
    UserService,
  ],
  exports: [UserService]
})
export class UserModule {}