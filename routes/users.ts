import { Request, Response, Router } from "express";
const userSubServer = Router();

userSubServer.
    route("/:id").
    get(async (req: Request, res: Response, next) => {})
    .post(async (req, res, next) => {})
    .delete(async (req, res, next) => {})
    .put(async (req, res, next) => {});

export default userSubServer;
