import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { IsArray, IsNumber } from 'class-validator';
import { Episode } from 'src/models/episode';
import { Instructor } from 'src/models/instructor';
import { InstructorService } from 'src/repositories/instructor';

class setCourseDTO {
    @ApiProperty({type: Number})
    @IsNumber()
    id: number;
  
    @ApiProperty({type: [Number]})
    @IsArray()
    course_list: Array<number>;
  }


@Crud({
  model: {
    type: Episode,
  },
})
@ApiTags('Instructor')
@Controller('api/instructor')
export class InstructorController implements CrudController<Instructor> {
    constructor(public service: InstructorService) { }

  @ApiOperation({ summary: 'Set Course Of Instructor' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiBody({ description: 'Set Course Of Instructor', type: setCourseDTO })
  @Post('set-course')
  @HttpCode(HttpStatus.OK)
  set(
      @Body() request: setCourseDTO
  ): Promise<any> {
      return this.service.setCourseOfInstructor(request)
  }
}