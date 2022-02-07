import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { Episode } from 'src/models/episode';
import { EpisodeService } from 'src/repositories/episode';


@Crud({
  model: {
    type: Episode,
  },
})
@ApiTags('Episode')
@Controller('api/episode')
export class EpisodeController implements CrudController<Episode> {
    constructor(public service: EpisodeService) { }

}
  