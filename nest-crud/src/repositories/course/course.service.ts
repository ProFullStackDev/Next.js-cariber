import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Course } from 'src/models/course';
import { Episode } from 'src/models/episode';

@Injectable()
export class CourseService extends TypeOrmCrudService<Course>{
  constructor( @InjectRepository(Course) repo,
  @InjectRepository(Episode) private readonly episoderepo ) { 
    super(repo);
  }

  async setEpisodeOfCourse(request): Promise<any> {
    let course = await this.repo.findOne(request.id, { relations: ['episode'] })
    const episode_list = []
    request.episode_list.map(async(data)=>{
      let course = await this.episoderepo.findOne(data.id)
      episode_list.push(course)
    })
    course.episode = episode_list
    course = await this.repo.save(course)
    course = await this.repo.findOne(request.id, { relations: ['episode'] })
    return course
   }

}