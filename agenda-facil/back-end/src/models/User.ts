import { GenerateCustomId } from "../common/GenerateCustomId";
import { UserRole } from "../enums/UserRole";
import { IsValidEmail } from "../common/IsValidEmail";
import { IsValidUserName } from "../common/IsValidUserName";
import { IUserDto } from "../interfaces/IUserDto";

export class User{

    private __id: string;
    private __userName: string;
    private __email: string;
    private __passwordHash: string;
    private __role: UserRole;
    private __createdAt: string;

    constructor(userName: string, email: string, passwordHash: string){

        const normalizedEmail = email.trim().toLocaleLowerCase();

        if(!IsValidUserName(userName)){
            throw new Error(`User name is not valid`);
        }

        if(!IsValidEmail(email)){
            throw new Error(`User email is not valid`);
        }

        if(passwordHash.trim() === ""){
            throw new Error(`Password hash is required`)
        }

        this.__id = GenerateCustomId(this);
        this.__userName = userName;
        this.__email = normalizedEmail;
        this.__passwordHash = passwordHash;
        this.__role = UserRole.CLIENT;
        this.__createdAt = new Date().toISOString();
    }

    promoteToAdmin(): void{
        if(this.__role === UserRole.ADMIN){
            throw new Error(`User is alredy an admin`);
        }
        this.__role = UserRole.ADMIN;
    }

    isAdmin(): boolean{

      if(this.__role === UserRole.ADMIN) return true;

      return false;
    }

    toDTO(): IUserDto{

        return{
            id: this.__id,
            userName: this.__userName,
            email: this.__email,
            role: this.__role,
            createdAt: this.__createdAt
        }
    }

    toSting(): string{
        return `Id: ${this.__id} | userName${this.__userName} | email: ${this.__email} | role ${this.__role} | createdAt: ${this.__createdAt}`;
    }

    getId(): string{
        return this.__id;
    }

    getUserName(): string{
        return this.__userName;
    }

    getEmail(): string{
        return this.__email;
    }

    getPasswordHash(): string{
        return this.__passwordHash;
    }

    getRole(): UserRole{
        return this.__role;
    }
}