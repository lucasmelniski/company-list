import * as express from "express";
import "reflect-metadata";
import { User } from "../database/entity/User/User";
import UserResolvers from "../database/resolvers/UserResolvers";
import Utils from "../utils/Utils";

const users = express.Router();
const userResolvers = new UserResolvers();

users.post("/seed/one", async (req, res) => {
  const result = await userResolvers.addSeedUser();
  return res.send(result);
});

users.post("/seed/populate", async (req, res) => {
  const result = userResolvers.populateSeeds();
  return res.send(result);
});

users.put("/:userId", async (req, res) => {
  const userId = Utils.transformObjectId(req.params.userId);
  if (!userId) return res.send("Id passed isn't Object Id");
  const data: User = req.body;
  const user = Object.assign(new User(), data);

  const result = await userResolvers.updateOne(user, userId);
  return res.send(result);
});

users.delete("/:userId", async (req, res) => {
  const userId = Utils.transformObjectId(req.params.userId);
  if (!userId) return res.send("Id passed isn't Object Id");
  const result = await userResolvers.deleteOne(userId);
  return res.send(result);
});

users.get("/:userId", async (req, res) => {
  const userId = Utils.transformObjectId(req.params.userId);
  if (!userId) return res.send("Id passed isn't Object Id");
  const result = await userResolvers.getOne(userId);
  return res.send(result);
});

users.get("/", async (req, res) => {
  const result = await userResolvers.getAll();
  return res.send(result);
});

users.get("/page/:number", async (req, res) => {
  const page = parseInt(req.params.number);
  const result = await userResolvers.getAll(page);
  return res.send(result);
});

users.get("/filter/:gender/:nat/:name/page/:page", async (req, res) => {
  const { gender, nat, name, page } = req.params;
  const result = await userResolvers.getAllFiltered(
    parseInt(page),
    gender,
    name,
    nat
  );
  return res.send(result);
});

export default users;
