export interface iUser {
    id: string,
    email: string,
    password: string,
    role: eUserRoles
}


enum eUserRoles {
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    USER = "USER",
    GUEST = "GUEST"
}