import { ScheduleConfig, timeToMinutes } from "../common/TimeSlots";
import { IBusinessSettingsDto } from "../interfaces/IBusinessSettingsDto";

export class BusinessSetting{
    
    private __openingTime: string;
    private __closingTime: string;
    private __slotDurationMinutes: number;
    private __workingDays: number[];
    private __updatedAt: string;

    constructor(openingTime: string, closingTime: string, slotDurationMinutes: number, workingDays: number[]){

        this.__openingTime = openingTime;
        this.__closingTime = closingTime;
        this.__slotDurationMinutes = slotDurationMinutes;
        this.__workingDays = workingDays;
        this.__updatedAt = new Date().toISOString();
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