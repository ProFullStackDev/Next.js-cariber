import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { AccessGroup } from 'src/models/accessgroup';
import { SubscriptionRecord } from 'src/models/subsciptionRecord';

@Injectable()
export class SubscriptionRecordService extends TypeOrmCrudService<SubscriptionRecord>{
  constructor( @InjectRepository(SubscriptionRecord) repo) { 
    super(repo);
  }
}