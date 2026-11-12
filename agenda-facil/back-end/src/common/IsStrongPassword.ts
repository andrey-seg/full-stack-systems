const MIN_PASSWORD_LENGTH = 8;

export function IsStrongPassword(value: string): boolean{
    const hasMinLength = value.length >= MIN_PASSWORD_LENGTH;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value);

    return hasMinLength && hasLetter && hasNumber;
}