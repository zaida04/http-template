import { Router } from "express";
import userSubServer from './users';
const mainSubserver = Router();

mainSubserver.use("/users", userSubServer)

export default mainSubserver;