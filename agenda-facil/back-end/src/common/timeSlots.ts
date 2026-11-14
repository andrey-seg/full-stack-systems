export interface ScheduleConfig{
    openingTime: string;
    closingTime: string;
    slotDurationMinutes: number;
    workingDays: number[];
}

export const DEFAULT_SCHEDULE_CONFIG: ScheduleConfig = {

    openingTime: 
}