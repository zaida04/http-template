import bodyParser from 'body-parser';
import express, { Application, Router } from "express";
import compression from "compression";
import { version } from "./package.json";
import DatabaseHandler from './database/DatabaseHandler';
import { httpServerDetails } from './typings/httpServerTypings';

declare global {
    namespace Express {
        interface Application {
            details: httpServerDetails
            db: DatabaseHandler
        }
        interface Request {
            data: Record<string, any>
        }
    }
}

export default function httpserver(config: httpServerDetails) {
    const http: Application = express();
    http.details = config


    http.use(bodyParser.json());
    http.use(bodyParser.urlencoded({ extended: false }));
    http.use(compression());

    const api = Router();
    api.use(`/api/v${http.details.apiVersion.charAt(0)}`)

    return http;
}
    
