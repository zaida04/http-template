import httpserver from "./server";
import { httpServerDetails } from './typings/httpServerTypings';
const config: httpServerDetails = {
    apiVersion: process.env.APIVERSION || "v1",
    url: process.env.URL || "localhost",
    port: process.env.PORT ? parseInt(process.env.PORT) : 80
};

httpserver(config).listen(config.port, () => {
    return console.log(`HTTP Server is now live at http://${config.url}:${config.port}/`)
});