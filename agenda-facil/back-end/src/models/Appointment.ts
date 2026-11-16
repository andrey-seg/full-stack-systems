import { GenerateCustomId } from "../common/GenerateCustomId";
import { AppointmentStatus } from "../enums/AppointmentStatus";

export class Appointment{
    
    private __id: string;
    private __userId: string;
    private __date: string;
    private __time: string;
    private __status: AppointmentStatus;
    private __createdAt: string;

    constructor(userId: string, date: string, time: string, status: AppointmentStatus){

        this.__id = GenerateCustomId(this);
        this.__userId = userId;
        this.__date = date;
        this.__time = time;
        this.__status = status;
        this.__createdAt = new Date().toISOString();
    }

    
}