import { ScheduleConfig, timeToMinutes } from "../common/TimeSlots";
import { IsValidTime } from "../common/IsValidTime";
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

        BusinessSetting.validateTimes(openingTime, closingTime);
        BusinessSetting.validateDuration(openingTime, closingTime, slotDurationMinutes);
        BusinessSetting.validateWorkingDays(workingDays);

        this.__openingTime = openingTime;
        this.__closingTime = closingTime;
        this.__slotDurationMinutes = slotDurationMinutes;
        this.__workingDays = [...workingDays];
        this.__updatedAt = new Date().toISOString();
    }

    private static validateTimes(openingTime: unknown, closingTime: unknown): void{

        if(typeof openingTime !== "string" || !IsValidTime(openingTime)){
            throw new Error(`Opening time must be a valid time in "HH:MM" format`);
        }

        if(typeof closingTime !== "string" || !IsValidTime(closingTime)){
            throw new Error(`Closing time must be a valid time in "HH:MM" format`);
        }

        if(timeToMinutes(openingTime) >= timeToMinutes(closingTime)){
            throw new Error(`Opening time must be before closing time`);
        }
    }

    private static validateDuration(openingTime: string, closingTime: string, slotDurationMinutes: unknown): void{

        if(typeof slotDurationMinutes !== "number" || !ALLOWED_DURATION.includes(slotDurationMinutes)){
            throw new Error(`Slot duration must be one of: ${ALLOWED_DURATION.join(", ")} minutes`);
        }

        const interval = timeToMinutes(closingTime) - timeToMinutes(openingTime);

        if(interval % slotDurationMinutes !== 0){
            throw new Error(`The interval between opening and closing (${interval} min) must be divisible by the slot duration (${slotDurationMinutes} min)`);
        }
    }

    private static validateWorkingDays(workingDays: unknown): void{

        if(!Array.isArray(workingDays) || workingDays.length === 0){
            throw new Error("At least one working day is required");
        }

         const allDaysValid = workingDays.every(
            (day: unknown) =>
                typeof day === "number" &&
                Number.isInteger(day) &&
                day >= FIRST_WEEK_DAY &&
                day <= LAST_WEEK_DAY
        );

        if(!allDaysValid){
            throw new Error(`working days must be int from ${FIRST_WEEK_DAY} (Sunday) to ${LAST_WEEK_DAY} (Saturday)`);
        }

        if(new Set(workingDays).size !== workingDays.length){
            throw new Error(`Working days must not repeat`);
        }
    }

    toConfig(): ScheduleConfig{
 
        return{
            openingTime: this.__openingTime,
            closingTime: this.__closingTime,
            slotDurationMinutes: this.__slotDurationMinutes,
            workingDays: [...this.__workingDays]
        }
    }

    toDTO(): IBusinessSettingsDto{

        return{
            openingTime: this.__openingTime,
            closingTime: this.__closingTime,
            slotDurationMinutes: this.__slotDurationMinutes,
            workingDays: [...this.__workingDays],
            updatedAt: this.__updatedAt
        }
    }

    getOpeningTime(): string{
        return this.__openingTime;
    }

    getClosingTime(): string{
        return this.__closingTime;
    }

    getSlotDurationMinutes(): number{
        return this.__slotDurationMinutes;
    }

    getWorkingDays(): number[]{
        return [...this.__workingDays];
    }

    getUpdatedAt(): string{
        return this.__updatedAt;
    }
}