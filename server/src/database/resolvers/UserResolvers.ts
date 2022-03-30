import { ObjectId } from "mongodb";
import { User } from "../entity/User/User";
import seedUsers from "../../utils/seeds/users";
import seedUser from "../../utils/seeds/user";

export default class UserResolvers {
  public addSeedUser = async () => {
    try {
      const newUser = Object.assign(new User(), seedUser);
      const seed = await User.insert(newUser);
      return seed.raw.ops[0];
    } catch (error) {
      console.log("addSeedUser User failed,", error);
      return false;
    }
  };

  public updateOne = async (
    updatedUser: User,
    id: ObjectId
  ): Promise<boolean> => {
    try {
      const user = await this.getOne(id);
      if (!user) return false;
      const newUser = Object.assign(user, updatedUser);
      await User.update({ _id: id }, newUser);
      return true;
    } catch (error) {
      console.log("updateOne User failed,", error);
      return false;
    }
  };

  public deleteOne = async (id: ObjectId): Promise<boolean> => {
    try {
      const user = await this.getOne(id);
      if (!user) return false;
      await user.remove();
      return true;
    } catch (error) {
      console.log("updateOne User failed,", error);
      return false;
    }
  };

  public populateSeeds = (): boolean => {
    try {
      seedUsers.results.forEach(async (seedUser) => {
        const newUser = Object.assign(new User(), seedUser);
        await User.insert(newUser);
      });

      return true;
    } catch (error) {
      console.log("populateSeeds User failed,", error);
      return false;
    }
  };

  public getOne = async (id: ObjectId): Promise<User> => {
    try {
      const user = await User.findOne({
        where: {
          _id: id,
        },
      });
      return user;
    } catch (error) {
      console.log("getOne User failed,", error);
      return undefined;
    }
  };

  public getAll = async (
    page?: number
  ): Promise<{ users: User[]; totalPages: number }> => {
    try {
      const totalUsers = await User.count();
      const take: number = 50;
      const users = await User.find(
        page ? { skip: (page - 1) * 50, take: 50 } : {}
      );
      return { users, totalPages: Math.ceil(totalUsers / take) };
    } catch (error) {
      console.log("getAll User failed,", error);
      return undefined;
    }
  };

  public getAllFiltered = async (
    page?: number,
    gender?: string,
    name?: string,
    nat?: string
  ): Promise<{ users: User[]; totalPages: number }> => {
    try {
      const first = name.split(" ").shift();
      const last = name.split(" ").pop();
      const filterOption = {};
      if (gender !== "any") filterOption["gender"] = { $eq: gender };
      if (nat !== "any") filterOption["nat"] = { $eq: nat };
      if (name !== "any")
        filterOption["$or"] = [
          {
            "name.first": new RegExp(
              `^${first.charAt(0).toUpperCase() + first.slice(1)}`
            ),
          },
          {
            "name.last": new RegExp(
              `^${last.charAt(0).toUpperCase() + last.slice(1)}`
            ),
          },
        ];
      const filterPage = page || 1;
      const take: number = 50;
      const queryOptions = {
        where: filterOption,
        skip: (filterPage - 1) * 50,
        take: 50,
      };
      const totalUsers = await User.count(filterOption);
      const users = await User.find(queryOptions);
      return { users, totalPages: Math.ceil(totalUsers / take) };
    } catch (error) {
      console.log("getAll User failed,", error);
      return undefined;
    }
  };
}
