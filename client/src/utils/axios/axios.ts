import * as axios from "axios";

export class Axios {
  public request: axios.AxiosInstance;
  constructor() {
    this.request = axios.default.create({
      headers: {
        secret:
          "9689b455f82325f8beabff5b2ed92b1020537b0d204874bced6b6ecd5360e67da723585d",
      },
      baseURL: "http://localhost:3001/",
      timeout: 8000, // 8 segundos
    });
  }

  public getUsers = async () => {
    return this.request.get("/users/");
  };

  public getLimitedUsers = async (
    page: number,
    gender?: string,
    nat?: string,
    name?: string
  ) => {
    console.log(page, gender, nat, name);
    return this.request.get(
      `/users/filter/${gender}/${nat}/${name}/page/${page}/`
    );
  };
}
