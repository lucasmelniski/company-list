import { Column } from "typeorm";

export class Id {
  @Column()
  name?: string | undefined;

  @Column()
  value?: string | undefined;
}
