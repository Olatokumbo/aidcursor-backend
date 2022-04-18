import { Column, Entity } from "typeorm";
import { Node } from "../common/base/base.entity";

@Entity("users")
export class User extends Node {
  @Column({ unique: true })
  email: string;

//   @Column()
//   hash: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;
}
