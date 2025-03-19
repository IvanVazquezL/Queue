import { MongoDatabase } from "./data/mongo/init";
import { Server } from "./presentation/server";

async function main() {
    MongoDatabase.connect({
        mongoUrl: 'mongodb://ivan:123456@localhost:27020',
        dbName: 'Queue'
    });

    new Server().start();
}

main();