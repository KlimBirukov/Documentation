import express from 'express'
import {
    NODE_ENV,
    PORT,
    DB_DATABASE,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD
} from '@config'


export default class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor() {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 5000;
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`)
        })
    }

    private initializeMiddlewares() {
        this.app.use(express.json())
    }
}