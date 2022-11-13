import {Router} from 'express';

import UsersControllers from '@controllers/users.controllers';
import {CreateUserDto} from '@dtos/users.dto';
import {Routes} from '@interfaces/routes.interface';


export default class UserRoute implements Routes {
    public path = '/users';
    public router = Router();
    public userControllers = new UsersControllers();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.userControllers.getUsers);
        this.router.post(`${this.path}`, this.userControllers.createUser)
    }
}