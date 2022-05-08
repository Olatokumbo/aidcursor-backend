import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Node } from "../common/base/base.entity";
import { Emergency } from "./emergency.entity";
import { Volunteer } from "./volunteer.entity";

export enum UserType {
  VOLUNTEER = "VOLUNTEER",
  NORMAL = "NORMAL",
}
@Entity("users")
export class User extends Node {
  @Column({ unique: true })
  email: string;

  @Column()
  hashedPassword: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.NORMAL,
  })
  type: UserType;

  @OneToOne(() => Volunteer, (volunteer) => volunteer.user, { eager: true })
  @JoinColumn()
  volunteer: Volunteer;

  @OneToMany(() => Emergency, (emergency) => emergency.requestedUser)
  emergencies: Emergency[];
}
