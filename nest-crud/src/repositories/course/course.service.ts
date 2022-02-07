import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Course } from 'src/models/course';

@Injectable()
export class CourseService extends TypeOrmCrudService<Course>{
  constructor( @InjectRepository(Course) repo ) { 
    super(repo);
  }
}