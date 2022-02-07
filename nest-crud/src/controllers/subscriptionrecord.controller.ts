import {
    Controller,
    Request,
    Post,
    UseGuards,
    HttpCode,
    HttpStatus,
    Get,
    Body,
  } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { SubscriptionRecord } from 'src/models/subsciptionRecord';
import { UserService } from 'src/repositories';
import { SubscriptionRecordService } from 'src/repositories/subscriptionrecord';
import { SubscibeAccessGroupDTO } from 'src/repositories/subscriptionrecord/dto/subscribe.dto';

@ApiTags('SubscriptionRecord')
@Controller('api/subscribe')
export class SubscriptionRecordController {
  constructor(public service: SubscriptionRecordService, public userservice: UserService) { }

  @ApiOperation({ summary: 'Subcripe Record' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post()
  @HttpCode(HttpStatus.OK)
  subscription(
      @Body() request: any
  ): any {
      console.log(request);
      return this.userservice.addSubscription(request)
  }


  @ApiOperation({ summary: 'Course Access List' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post()
  @HttpCode(HttpStatus.OK)
  CourseAccessList(
      @Body() request: any
  ): any {
      console.log(request);
      return this.userservice.addSubscription(request)
  }

}
