export declare class ConfigService {
    private readonly envConfig;
    constructor(filePath: string);
    get pgConnection(): string;
    get secretJwt(): string;
    get saltRounds(): number;
}
