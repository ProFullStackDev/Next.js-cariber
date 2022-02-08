import {
  Entity,
  Index,
  Column,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { AccessGroup } from './accessgroup'
import * as crypto from 'crypto';
import { hashSync as bcryptHashSync, compareSync } from 'bcryptjs';
import { hash } from 'bcrypt';
import { SubscriptionRecord } from './subsciptionRecord';

export enum UserStatus {
  Inactive = 'INACTIVE',
  Active = 'ACTIVE'
}

export interface IUser {
  id: string
  email: string
  createDate: Date
  updateDate: Date
}

@Entity({ schema: 'public' })
export class User implements IUser {

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }

  /**
   * User's document
   */
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty({ description: 'Email' })
  @Column({ type: 'varchar', length: 50 })
  @IsEmail({}, {
    message: 'The email is not valid'
  })
  @IsNotEmpty({
    message: 'Email is required'
  })
  email: string

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password =  await bcryptHashSync(this.password, 12);
  }
  @ApiProperty({ description: 'Password' })
  @Column()
  @IsNotEmpty({
    message: 'password is required'
  })
  password: string

  @Column({ default: UserStatus.Active})
  status: string

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp without time zone' })
  updateDate: Date

  @ApiProperty({ description: 'AccessGroup associated with the user' })
  @OneToMany(() => SubscriptionRecord, record => record.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinTable()
  subscription: SubscriptionRecord[]
}