export interface ScheduleConfig{
    openingTime: string;
    closingTime: string;
    slotDurationMinutes: number;
    workingDays: number[];
};

export const DEFAULT_SCHEDULE_CONFIG: ScheduleConfig = {

    openingTime: "08:00",
    closingTime: "18:00",
    slotDurationMinutes: 30,
    workingDays: [1, 2, 3, 4, 5, 6]
};

function timeToMinutes(time: string): number{
    const [hours, minutes] = time.split(":").map(Number);
    return hours! * 60 + minutes!;
}

function minutesToTime(totalMinutes: number): string{
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(hours / 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};

export function generateDailySlot(config: ScheduleConfig = DEFAULT_SCHEDULE_CONFIG): string[]{

    const start = timeToMinutes(config.openingTime);
    const end = timeToMinutes(config.closingTime);
    const slots: String[] = []; 

    for(let current = start; current <= end; current += end){
        slots.push(minutesToTime(current));
    }

    return slots;
}