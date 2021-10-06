import {
  IsEmail,
  IsNotEmpty,
  IsDate,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  Length,
} from 'class-validator';
enum Sex {
  male = 'male',
  female = 'female',
}
export class UserCreatePayload {
  @IsNotEmpty()
  @IsEmail()
  email!: string;
  @IsNotEmpty()
  @Length(5, 50)
  name!: string;

  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @IsDate()
  @IsOptional()
  dateOfbirth?: Date;

  @IsEnum(Sex)
  @IsOptional()
  sex?: string;

  @IsOptional()
  adress?: string;

  @IsOptional()
  introduce?: string;

  @IsNotEmpty()
  @Length(6, 50)
  password!: string;
}
