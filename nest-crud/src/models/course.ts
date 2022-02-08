import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { User } from './user'
import { SubscriptionRecord } from './subsciptionRecord';
import { AccessGroup } from './accessgroup';
import { Episode } from './episode';
import { Instructor } from './instructor';

@Entity({ name: 'course', schema: 'public' })
export class Course {

  constructor(partial: Partial<Course>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ description: 'Id of the document type'})
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: 'Speaker Name' })
  @Column({ length: 50, type: 'varchar', nullable: true, default: '' })
  @IsNotEmpty({
    message: 'speaker_name is required'
  })
  speaker_name: string

  @ApiProperty({ description: 'Course Name' })
  @Column({ length: 50, type: 'varchar', nullable: true, default: '' })
  @IsNotEmpty({
    message: 'course_name is required'
  })
  course_name: string

  @ApiProperty({ description: 'Description' })
  @Column({ length: 255, type: 'varchar', nullable: true, default: '' })
  @IsNotEmpty({
    message: 'description is required'
  })
  description: string

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp without time zone' })
  updateDate: Date

  @OneToMany(()=> Episode, episode => episode.course)
  episode: Episode[]

  @ManyToOne(()=> AccessGroup, access_group => access_group.course, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  access_group: AccessGroup

  @ManyToOne(()=> Instructor, instructor => instructor.course, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  instructor: Instructor
}
