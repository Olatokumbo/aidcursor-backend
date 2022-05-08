import { Column, Entity, OneToOne } from "typeorm";
import { Node } from "../common/base/base.entity";
import { User } from "./user.entity";

export enum VolunteerType {
  MEDICAL = "MEDICAL",
  SECURITY = "SECURITY",
}

@Entity("volunteers")
export class Volunteer extends Node {
  @Column({
    type: "enum",
    enum: VolunteerType,
    default: VolunteerType.MEDICAL,
  })
  type: VolunteerType;

  @Column({
    type: "bool",
  })
  isActive: boolean;

  @Column()
  latitude?: string;

  @Column()
  longitude: string;

  @OneToOne(() => User, (user) => user.volunteer)
  user: User;
}
