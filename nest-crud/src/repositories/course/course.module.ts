import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from 'src/models/course';
import { Episode } from 'src/models/episode';
import { CourseService } from './course.service';


@Module({
  imports: [TypeOrmModule.forFeature([Course, Episode])],
  providers: [CourseService],
  exports: [CourseService]
})
export class CourseModule {}
