import { Column } from "typeorm";

export class Picture {
  @Column()
  large: string;

  @Column()
  medium: string;

  @Column()
  thumbnail: string;
}
