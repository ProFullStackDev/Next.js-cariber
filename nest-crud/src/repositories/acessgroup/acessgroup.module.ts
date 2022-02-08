import { Module } from '@nestjs/common';
import { AcessgroupService } from './acessgroup.service';
import { AcessgroupController } from '../../controllers/acessgroup.controller';
import { AccessGroup } from 'src/models/accessgroup';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from 'src/models/course';


@Module({
  imports: [TypeOrmModule.forFeature([AccessGroup, Course])],
  providers: [AcessgroupService],
  exports: [AcessgroupService]
})
export class AcessgroupModule {}
