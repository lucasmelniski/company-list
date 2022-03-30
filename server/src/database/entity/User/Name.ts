import { Column } from "typeorm";

export class Name {
  @Column()
  title: string;

  @Column()
  first: string;

  @Column()
  last: string;
}
