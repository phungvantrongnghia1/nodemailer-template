export declare const hashAndValidatePassword: (password: string, saltRounds: number) => Promise<string>;
export declare const verify: (password: string, hashPassword: string) => Promise<boolean>;
export declare const hashPassword: (email: string, password: string, preHashSalt: string) => Promise<string>;
