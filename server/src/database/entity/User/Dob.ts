import { Column } from "typeorm";

export class Dob {
  @Column()
  date: string;

  @Column()
  age: number;
}
