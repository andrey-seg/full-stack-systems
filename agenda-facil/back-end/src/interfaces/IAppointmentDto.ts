import { AppointmentStatus } from "../enums/AppointmentStatus";

export interface IAppointmentDto{

    id: string,
    userId: string,
    date: string,
    time: string,
    status: AppointmentStatus;
    createdAt: string;
}