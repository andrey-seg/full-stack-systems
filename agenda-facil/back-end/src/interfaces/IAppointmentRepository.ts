import { Appointment } from "../models/Appointment";
import { IRepository } from "./IRepository";

export interface IAppointmentRepository extends IRepository<Appointment>{
    findByUserId(userId: string): Promise<Appointment[]>;
    findByDate(date: string): Promise<Appointment[]>;
}