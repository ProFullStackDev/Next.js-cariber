import {
  Controller,
  Request,
  Get,
  UseGuards,
  Param,
  HttpStatus,
  HttpCode,
  Post,
  BadRequestException,
  Put,
  Delete,
  Query,
  Logger,
  Inject,
  LoggerService,
  Body,
  ParseIntPipe,
  ParseArrayPipe,
  DefaultValuePipe,
  NotFoundException
} from '@nestjs/common'
import {
  ApiTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiBody,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiQuery,
  ApiNotFoundResponse,
  ApiForbiddenResponse
} from '@nestjs/swagger'
import { Request as RequestBody } from 'express'
import { AuthGuard } from '@nestjs/passport'
import { isEmpty } from 'lodash'

import { ERRORS, POSTGRES } from '../constants'
import { UserService } from '../repositories'
import { Crud, CrudController } from "@nestjsx/crud";
import { User } from 'src/models/user'

@Crud({
  model: {
    type: User,
  },
})
@Controller('/api/users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) { }
}
