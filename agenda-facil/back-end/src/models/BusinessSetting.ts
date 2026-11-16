import { ScheduleConfig, timeToMinutes } from "../common/TimeSlots";
import { isValidTime } from 
import { IBusinessSettingsDto } from "../interfaces/IBusinessSettingsDto";

const ALLOWED_DURATION: readonly number[] = [15, 30, 45, 60];
const FIRST_WEEK_DAY = 0; //domingo
const LAST_WEEK_DAY = 6; //sabado

export class BusinessSetting{
    
    private readonly __openingTime: string;
    private readonly __closingTime: string;
    private readonly __slotDurationMinutes: number;
    private readonly __workingDays: readonly number[];
    private readonly __updatedAt: string;

    constructor(openingTime: string, closingTime: string, slotDurationMinutes: number, workingDays: number[]){

        BusinessSetting.validateTimes()

        this.__openingTime = openingTime;
        this.__closingTime = closingTime;
        this.__slotDurationMinutes = slotDurationMinutes;
        this.__workingDays = workingDays;
        this.__updatedAt = new Date().toISOString();
    }

    private static validateTimes(openingTime: unknown, closingTime: unknown): void{

        if(typeof openingTime!== "string" || !isValidTime(openingTime)){

        }
    }

    toConfig(): ScheduleConfig{
 
        return{
            openingTime: this.__openingTime,
            closingTime: this.__closingTime,
            slotDurationMinutes: this.__slotDurationMinutes,
            workingDays: this.__workingDays
        }
    }

    toDTO(): IBusinessSettingsDto{

        return{
            openingTime: this.__openingTime,
            closingTime: this.__closingTime,
            slotDurationMinutes: this.__slotDurationMinutes,
            workingDays: this.__workingDays,
            updatedAt: this.__updatedAt
        }
    }

    getOpeningTime(): string{
        return this.__openingTime;
    }

    getClosingTime(): string{
        return this.__closingTime;
    }

    getSlotDurationTime(): number{
        return this.__slotDurationMinutes;
    }

    getWorkingDays(): number[]{
        return this.__workingDays;
    }

    getUpdateAt(): string{
        return this.__updatedAt;
    }
}