import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { AccessGroup } from 'src/models/accessgroup';
import { Course } from 'src/models/course';
import { Episode } from 'src/models/episode';

@Injectable()
export class EpisodeService extends TypeOrmCrudService<Episode>{
  constructor( @InjectRepository(Episode) repo,
  @InjectRepository(Course) private readonly courserepo ) { 
    super(repo);
   }
}