export interface iUser {
    id: number,
    email: string,
    password: string,
    role: string,
}


export enum eUserRoles {
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    USER = "USER",
    GUEST = "GUEST"
}