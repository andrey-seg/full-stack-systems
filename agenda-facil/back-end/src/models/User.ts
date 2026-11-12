import { GenerateCustomId } from "../common/GenerateCustomId";
import { UserRole } from "../enums/UserRole";
import { IsStrongPassword } from "../common/IsStrongPassword";
import { isValidEmail } from "../common/IsValidEmail";
import { isValidUserName } from "../common/IsValidUserName";

export class User{

    private __id: string;
    private __userName: string;
    private __email: string;
    private __passwordHash: string;
    private __role?: UserRole;
    private __createdAt: string;

    constructor(userName: string, passwordHash: string){

        this.__id = GenerateCustomId(this);
        this.__userName = userName;
        this.__passwordHash = passwordHash;
        this.__role = UserRole.CLIENT;
        this.__createdAt = new Date().toISOString();
    }
}