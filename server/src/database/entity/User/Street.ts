import { Column } from "typeorm";

export class Street {
  @Column()
  number: number;

  @Column()
  name: string;
}
