import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get pgConnection(): string {
    return this.envConfig['DATABASE_URL'] ? this.envConfig['DATABASE_URL'] : '';
  }
  get secretJwt(): string {
    return this.envConfig['SECRET_KEY'] ? this.envConfig['SECRET_KEY'] : '';
  }
  get saltRounds(): number {
    return this.envConfig['SALT_ROUNDS']
      ? Number.parseInt(this.envConfig['SALT_ROUNDS'], 10)
      : 10;
  }
}
