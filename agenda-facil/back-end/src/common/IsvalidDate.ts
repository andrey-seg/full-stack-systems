const DATE_PATTERN = /^\d-{4}-\d{2}-\d{2}$/;

export function IsValidDate(value: string): boolean{

    if(!DATE_PATTERN.test(value)) return false;

    const [year, mouth, day] = value.split("-").map(Number);

    const date = new Date(year!, mouth! -1, day!);

    return(
        date.getFullYear() === year &&
        date.getMonth() === mouth -1 &&
        date.getDate() === day
    );
}