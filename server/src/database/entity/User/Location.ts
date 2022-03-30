import { Column } from "typeorm";
import { Coordinates } from "./Coordinates";
import { Street } from "./Street";
import { Timezone } from "./Timezone";

export class Location {
  @Column(() => Street)
  street: Street;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  postcode: number;

  @Column(() => Coordinates)
  coordinates: Coordinates;

  @Column(() => Timezone)
  timezone: Timezone;
}
