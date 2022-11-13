import {hash} from 'bcrypt'

import DB from '@databases';
import {CreateUserDto} from '@dtos/users.dto';
import {iUser} from '@interfaces/user.interface';
import {isEmpty} from '@utils/util';
import {HttpException} from '@exceptions/HttpException'


export default class UsersService  {
    public users = DB.Users;

    public async findAllUsers(): Promise<iUser[]> {
        const allUser: Promise<iUser[]> =  this.users.findAll();
        return await allUser;
    }

    public async createUser(userData: CreateUserDto): Promise<iUser> {
        if(isEmpty(userData)) throw new HttpException(400, 'userData is empty');

        const findUser: iUser = await this.users.findOne( {where: {email: userData.email}});
        if(findUser) throw  new HttpException(409, `This email ${userData.email} already exist`);

        const hashedPassword = await hash(userData.password, 10);
        return await this.users.create({...userData, password: hashedPassword});
    }
}