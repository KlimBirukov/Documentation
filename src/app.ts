import express from 'express';

import {NODE_ENV, PORT} from '@config';
import {Routes} from '@interfaces/routes.interface';
import DB from '@databases';


export default class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 5000;

        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`)
        })
    }

    private connectToDatabase() {
        DB.sequelize.sync({force: false})
            .then(() => 'DB connected')
            .catch(err => console.log('Something went wrong: ', err));
    }

    private initializeMiddlewares() {
        this.app.use(express.json())
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        })
    }
}