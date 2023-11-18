import {MongoClient} from "mongodb";

const uri = process.env.MONGODB_URI as string; // your mongodb connection string
const options = {};

declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

class Database {
    private static _instance: Database;
    private client: MongoClient;
    private clientPromise: Promise<MongoClient>;
    private constructor() {
        this.client = new MongoClient(uri, options);
        this.clientPromise = this.client.connect();
        if (process.env.NODE_ENV === 'development') {
            // In development mode, use a global variable so that the value
            // is preserved across module reloads caused by HMR (Hot Module Replacement).
            global._mongoClientPromise = this.clientPromise;
        }
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new Database();
        }
        return this._instance.clientPromise;
    }

    public static async of (collection: string) {
        const clientPromise = Database.instance;
        const client = await clientPromise;
        return client.db('ibrahimi').collection(collection);
    }
}


// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default Database;