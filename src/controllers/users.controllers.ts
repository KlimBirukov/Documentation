import {NextFunction, Request, Response} from 'express';

import {CreateUserDto} from '@dtos/users.dto';
import {iUser} from '@interfaces/user.interface';
import UsersService from '@services/users.service';


export default class UsersControllers {
    public userService = new UsersService();

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllUsersData: iUser[] = await this.userService.findAllUsers();

            res.status(200).json({data: findAllUsersData, message: 'findAll'});
        } catch (error) {
            next(error);
        }
    }

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDto = req.body;
            const createdUserData: iUser = await this.userService.createUser(userData);
            res.status(201).json({data: createdUserData, message: 'user created'});
        } catch (error) {
            next(error);
        }
    }
}