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
  EpisodeModule,
  InstructorModule
} from './repositories'
import {
  AuthController,
  UserController,
  AcessgroupController,
  CourseController,
  EpisodeController,
  InstructorController
} from './controllers'
import * as config from 'src/database/ormconfig'
import { SubscriptionRecordController } from './controllers/subscriptionrecord.controller';
import { CourseModule } from './repositories/course';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    HttpModule,
    AuthModule,
    UserModule,
    AcessgroupModule,
    SubscriptionRecordModule,
    CourseModule,
    EpisodeModule,
    InstructorModule
  ],
  controllers: [
    AppController,
    AuthController,
    UserController,
    AcessgroupController,
    SubscriptionRecordController,
    CourseController,
    EpisodeController,
    InstructorController
  ],
  providers: [Logger, AppService],
})
export class AppModule {}
