export interface ValidationResult {
    valid: boolean,
    message?: string,
}

export function StringIsEmpty(string: string): ValidationResult {
    if (string.length > 0) {
        return { valid: true };
    } else {
        return { valid: false, message: 'Cannot be empty' };
    }
}