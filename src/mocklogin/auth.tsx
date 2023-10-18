export interface User {
    id: number,
    email: string,
    password: string,
}

/* This interface might be used as a generic API return result */
export interface ApiResult {
    success: boolean,
    message?: string,
}

/* Fake data */
let UsersDB: User[] = [
    { id: 0, email: 'test@test.com', password: 'test' },
    { id: 1, email: 'test1@test1.com', password: 'test1' }
]

export function Login(email: string, password: string): ApiResult {
    const user = UsersDB.find((user) => user.email === email && user.password === password);
    if (user) {
        return { success: true, message: 'Login successful' };
    } else
        return { success: false, message: 'Invalid email or password' };
}

