const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

export function IsValidTime(value: string): boolean{
    return TIME_PATTERN.test(value);
}