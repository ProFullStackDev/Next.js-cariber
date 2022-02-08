import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { AccessGroup } from 'src/models/accessgroup';
import { Course } from 'src/models/course';

@Injectable()
export class AcessgroupService extends TypeOrmCrudService<AccessGroup>{
  constructor( @InjectRepository(AccessGroup) repo,
  @InjectRepository(Course) private readonly courserepo ) { 
    super(repo);
   }


   async setCourseOfAccessGroup(request): Promise<any> {
    let access_group = await this.repo.findOne(request.id, { relations: ['course'] })
    const course_list = []
    request.course_list.map(async(data)=>{
      let course = await this.courserepo.findOne(data.id)
      course_list.push(course)
    })
    access_group.course = course_list
    access_group = await this.repo.save(access_group)
    access_group = await this.repo.findOne(request.id, { relations: ['course'] })
    return access_group
   }
}