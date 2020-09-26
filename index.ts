import { httpServerDetails } from "./typings/httpServerTypings";
import httpserver from "./server";

const config: httpServerDetails = {
    "apiVersion": process.env.APIVERSION || "v1",
    "port": process.env.PORT ? parseInt(process.env.PORT) : 80,
    "url": process.env.URL || "localhost"
};

httpserver(config).listen(config.port, () => {
    return console.log(`HTTP Server is now live at http://${config.url}:${config.port}/`);
});
