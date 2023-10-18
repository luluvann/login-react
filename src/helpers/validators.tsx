export interface ValidationResult {
    valid: boolean,
    message?: string,
}

export function StringIsEmpty(string: string): ValidationResult {
    if (string) {
        return { valid: true };
    } else {
        return { valid: false, message: 'Cannot be empty' };
    }
}