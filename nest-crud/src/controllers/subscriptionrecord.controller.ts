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
import { ApiBearerAuth, ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { SubscriptionRecord } from 'src/models/subsciptionRecord';
import { UserService } from 'src/repositories';
import { SubscriptionRecordService } from 'src/repositories/subscriptionrecord';


class subscribeRecordDTO {
    @ApiProperty({type: Number})
    @IsString()
    id: string;
  
    @ApiProperty({type: Number})
    @IsNumber()
    access_group: number;
  }
@ApiTags('SubscriptionRecord')
@Controller('api/subscribe')
export class SubscriptionRecordController {
  constructor(public service: SubscriptionRecordService, public userservice: UserService) { }

  @ApiOperation({ summary: 'Subcripe Record' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiBody({ description: 'Subscribe Record', type: subscribeRecordDTO })
  @Post()
  @HttpCode(HttpStatus.OK)
  subscription(
      @Body() request: subscribeRecordDTO
  ): Promise<SubscriptionRecord> {
      return this.userservice.addSubscription(request)
  }


//   @ApiOperation({ summary: 'Course Access List' })
//   @UseGuards(AuthGuard('jwt'))
//   @ApiBearerAuth()
//   @Post()
//   @HttpCode(HttpStatus.OK)
//   CourseAccessList(
//       @Body() request: any
//   ): any {
//       console.log(request);
//       return this.userservice.addSubscription(request)
//   }

}
