import {
  Controller,
} from '@nestjs/common'
import {
  ApiTags,
} from '@nestjs/swagger'

import { UserService } from '../repositories'
import { Crud, CrudController } from "@nestjsx/crud";
import { User } from 'src/models/user'

@Crud({
  model: {
    type: User,
  },
})
@ApiTags('User')
@Controller('/api/users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) { }
}
