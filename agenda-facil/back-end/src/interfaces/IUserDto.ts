import { UserRole } from "../enums/UserRole";

export interface IUserDto{
    id: string,
    userName: String,
    email: string,
    role: UserRole,
    createdAt: string
}