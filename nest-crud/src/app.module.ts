import { Logger, Module, HttpModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin'

import {
  UserModule,
  AcessgroupModule,
  SubscriptionRecordModule,
} from './repositories'
import {
  AuthController,
  UserController,
  AcessgroupController,
  CourseController,
} from './controllers'
import * as config from 'src/database/ormconfig'
import { SubscriptionRecordController } from './controllers/subscriptionrecord.controller';
import { CourseModule } from './repositories/course';
import { User } from './models/user';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    HttpModule,
    AuthModule,
    UserModule,
    AcessgroupModule,
    SubscriptionRecordModule,
    CourseModule,
    DefaultAdminModule
  ],
  controllers: [
    AppController,
    AuthController,
    UserController,
    AcessgroupController,
    SubscriptionRecordController,
    CourseController,
  ],
  providers: [Logger, AppService],
})
export class AppModule {
}
