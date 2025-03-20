export class EmailValidatorAdapter {
    isEmail(value: string): boolean {
        return value.includes('@');
    }
}
