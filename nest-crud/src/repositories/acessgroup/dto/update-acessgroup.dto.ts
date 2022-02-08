import { PartialType } from '@nestjs/mapped-types';
import { CreateAcessgroupDto } from './create-acessgroup.dto';

export class UpdateAcessgroupDto extends PartialType(CreateAcessgroupDto) {}
