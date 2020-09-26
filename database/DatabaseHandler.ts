import mongoose from "mongoose";

export default class DatabaseHandler {
    api: mongoose.Connection
    
    constructor(URI: string) {
        mongoose.set("useCreateIndex", true);
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        this.api = mongoose.connection
    }
}