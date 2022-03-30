import { Column } from "typeorm";

export class Coordinates {
  @Column()
  latitude: string;

  @Column()
  longitude: string;
}
