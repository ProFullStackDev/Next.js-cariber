import { Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { Episode } from 'src/models/episode';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from 'src/models/course';


@Module({
  imports: [TypeOrmModule.forFeature([Episode, Course])],
  providers: [EpisodeService],
  exports: [EpisodeService]
})
export class EpisodeModule {}
