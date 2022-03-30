import { Column } from "typeorm";

export class Registered {
  @Column()
  date: string;

  @Column()
  age: number;
}
