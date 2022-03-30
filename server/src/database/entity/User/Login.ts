import { Column } from "typeorm";

export class Login {
  @Column()
  uuid: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  md5: string;

  @Column()
  sha1: string;
  
  @Column()
  sha256: string;
}
