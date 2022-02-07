import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from 'src/models/course';
import { CourseService } from './course.service';


@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  exports: [CourseService]
})
export class CourseModule {}
