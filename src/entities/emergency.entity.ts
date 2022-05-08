import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Node } from "../common/base/base.entity";
import { User } from "./user.entity";
import { Volunteer } from "./volunteer.entity";

export enum EmergencyLevel {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export enum EmergencyType {
  MEDICAL = "MEDICAL",
  SECURITY = "SECURITY",
}

@Entity("emergencies")
export class Emergency extends Node {
  @Column({
    type: "enum",
    enum: EmergencyLevel,
    default: EmergencyLevel.MEDIUM,
  })
  level: EmergencyLevel;

  @Column({
    type: "enum",
    enum: EmergencyType,
  })
  type: EmergencyType;

  @Column({ nullable: true })
  description?: string;

  @Column({
    type: "bool",
  })
  isActive: boolean;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @ManyToOne(() => User, (user) => user.emergencies)
  requestedUser: User;

  @ManyToMany(() => Volunteer, (volunteer) => volunteer.emergencies)
  volunteers: Volunteer[];
}
