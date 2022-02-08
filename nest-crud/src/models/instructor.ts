import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { User } from './user'
import { SubscriptionRecord } from './subsciptionRecord';
import { AccessGroup } from './accessgroup';
import { Episode } from './episode';
import { Course } from './course';

@Entity({ name: 'instructor', schema: 'public' })
export class Instructor {

  constructor(partial: Partial<Instructor>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: 'Name' })
  @Column({ type: 'varchar', nullable: true, default: '' })
  @IsNotEmpty({
    message: 'name is required'
  })
  name: string



  @CreateDateColumn({ type: 'timestamp without time zone' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp without time zone' })
  updateDate: Date

  @OneToMany(()=> Course, course => course.instructor)
  course: Course[]
}
