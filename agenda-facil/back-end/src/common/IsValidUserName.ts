const USERNAME_PATTERN = /^[a-z0-9_]{3,20}$/;

export function IsValidUserName(value: string): boolean{
    return USERNAME_PATTERN.test(value);
}