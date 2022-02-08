import { Module } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { Episode } from 'src/models/episode';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from 'src/models/course';
import { Instructor } from 'src/models/instructor';


@Module({
  imports: [TypeOrmModule.forFeature([Instructor, Course])],
  providers: [InstructorService],
  exports: [InstructorService]
})
export class InstructorModule {}
