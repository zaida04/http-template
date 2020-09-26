import { Router } from "express";
const subserver = Router();

subserver.route("/:id")
    .get(async (req, res, next) => {

    })
    .post(async (req, res, next) => {

    })
    .delete(async (req, res, next) => {

    })
    .put(async (req, res, next) => {

    })

export const route = subserver;