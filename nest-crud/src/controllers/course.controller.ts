import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { IsArray, IsNumber } from 'class-validator';
import { Course } from 'src/models/course';
import { CourseService } from 'src/repositories/course';

class setEpisodeDTO {
  @ApiProperty({type: Number})
  @IsNumber()
  id: number;

  @ApiProperty({type: [Number]})
  @IsArray()
  episode_list: Array<number>;
}

@Crud({
  model: {
    type: Course,
  },
})
@ApiTags('Course')
@Controller('api/course')
export class CourseController implements CrudController<Course> {
  constructor(public service: CourseService) { }

  @ApiOperation({ summary: 'Set Episode Of Course' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiBody({ description: 'Set Episode Of Course', type: setEpisodeDTO })
  @Post('set-episode')
  @HttpCode(HttpStatus.OK)
  subscription(
      @Body() request: setEpisodeDTO
  ): Promise<any> {
      return this.service.setEpisodeOfCourse(request)
  }
}
