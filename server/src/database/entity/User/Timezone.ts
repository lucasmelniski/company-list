import { Column } from "typeorm";

export class Timezone {
  @Column()
  offset: string;

  @Column()
  description: string;
}
