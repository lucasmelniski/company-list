import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from "typeorm";
import { Dob } from "./Dob";
import { Id } from "./Id";
import { Location } from "./Location";
import { Login } from "./Login";
import { Name } from "./Name";
import { Picture } from "./Picture";
import { Registered } from "./Registered";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  gender: string;

  @Column(() => Name)
  name: Name;

  @Column(() => Location)
  location: Location;

  @Column()
  email: string;

  @Column(() => Login)
  login: Login;
  
  @Column(() => Dob)
  dob: Dob;

  @Column(() => Registered)
  registered: Registered;

  @Column()
  phone: string;

  @Column()
  cell: string;

  @Column(() => Id)
  id: Id;

  @Column(() => Picture)
  picture: Picture;

  @Column()
  nat: string;
}
