import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { Course } from 'src/models/course';
import { CourseService } from 'src/repositories/course';


@Crud({
  model: {
    type: Course,
  },
})
@Controller('api/course')
export class CourseController implements CrudController<Course> {
  constructor(public service: CourseService) { }
}
