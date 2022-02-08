import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { User } from './user'
import { SubscriptionRecord } from './subsciptionRecord';
import { Course } from './course';

@Entity({ name: 'access_groups', schema: 'public' })
export class AccessGroup {

  constructor(partial: Partial<AccessGroup>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ description: 'Id of the document type'})
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: 'Name of the document type' })
  @IsNotEmpty({
    message: 'The name is required'
  })
  @Column({ length: 50, type: 'varchar' })
  name: string

  @ApiProperty({ description: 'may be Delta Time' })
  @Column({ type: 'int' })
  @IsNotEmpty({
    message: 'The duration is required'
  })
  duration: number

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp without time zone' })
  updateDate: Date

  @OneToMany(()=> SubscriptionRecord, record => record.access_group)
  subscription: SubscriptionRecord[]

  @OneToMany(()=> Course, course => course.access_group)
  course: Course[]
}
