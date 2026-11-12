const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function IsValidEmail(value: string): boolean{
    return EMAIL_PATTERN.test(value);
}