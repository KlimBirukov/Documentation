import {
    Sequelize,
    DataTypes,
    Model,
    Optional
} from 'sequelize';
import {iUser} from '@interfaces/user.interface';


export type UserCreationAttributes = Optional<iUser, 'id' | 'email' | 'password' | 'role' >;

export class UserModel extends Model<iUser, UserCreationAttributes> implements iUser {
    email: string;
    id: number;
    password: string;
    role: string;

    public readonly created_at: Date;
    public readonly updated_at: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
    UserModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(45),
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(255)
        },
        role: {
            allowNull: false,
            type: DataTypes.STRING(15)
        },
    }, {
        tableName: 'users',
        sequelize,
    });

    return UserModel;
}

