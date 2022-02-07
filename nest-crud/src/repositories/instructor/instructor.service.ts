import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { AccessGroup } from 'src/models/accessgroup';
import { Course } from 'src/models/course';
import { Episode } from 'src/models/episode';
import { Instructor } from 'src/models/instructor';

@Injectable()
export class InstructorService extends TypeOrmCrudService<Instructor>{
  constructor( @InjectRepository(Instructor) repo,
  @InjectRepository(Course) private readonly courserepo ) { 
    super(repo);
   }

   async setCourseOfInstructor(request): Promise<any> {
    let instructor = await this.repo.findOne(request.id, { relations: ['course'] })
    const course_list = []
    request.course_list.map(async(data)=>{
      let course = await this.courserepo.findOne(data.id)
      course_list.push(course)
    })
    instructor.course = course_list
    instructor = await this.repo.save(instructor)
    instructor = await this.repo.findOne(request.id, { relations: ['course'] })
    return instructor
   }
}