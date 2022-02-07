import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { User } from './user'
import { SubscriptionRecord } from './subsciptionRecord';
import { Course } from './course';

@Entity({ schema: 'public' })
export class Episode {

  constructor(partial: Partial<Episode>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: 'episode_number' })
  @Column({ type: 'int' })
  @IsNotEmpty({
    message: 'The episode_number is required'
  })
  episode_number: number

  @ApiProperty({ description: 'episode_name' })
  @IsString({
    message: 'The episode_name is required'
  })
  @Column()
  episode_name: string

  @ApiProperty({ description: 'description' })
  @IsString({
    message: 'The description is required'
  })
  @Column()
  description: string

  @ApiProperty({ description: 'link_video' })
  @IsString({
    message: 'The link_video is required'
  })
  @Column({  })
  link_video?: string

  @Column({ type: 'boolean', default: true })
  is_free_trial: boolean

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp without time zone' })
  updateDate: Date

  @ManyToOne(type => Course, course => course.episode)
  course: Course
}
