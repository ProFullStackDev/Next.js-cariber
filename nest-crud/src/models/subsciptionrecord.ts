import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, CreateDateColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { User } from './user'
import { AccessGroup } from './accessgroup';


@Entity({ schema: 'public' })
export class SubscriptionRecord {

  constructor(partial: Partial<SubscriptionRecord>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(()=> User, user => user.subscription, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinTable()
  user: User

  @ManyToOne(()=> AccessGroup, access_group => access_group.subscription, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinTable()
  access_group: AccessGroup[]

  @ApiProperty({ description: 'may be Delta Time' })
  @CreateDateColumn({ type: 'timestamp without time zone' })
  subscription_date: Date
}
