import { Module } from '@nestjs/common';
import { SubscriptionRecordService } from './subscriptionrecord.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubscriptionRecord } from 'src/models/subsciptionRecord';


@Module({
  imports: [TypeOrmModule.forFeature([SubscriptionRecord])],
  providers: [SubscriptionRecordService],
  exports: [SubscriptionRecordService]
})
export class SubscriptionRecordModule {}
