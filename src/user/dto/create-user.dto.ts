import { IsEmail, IsNumber, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsNumber()
    @Type(() => Number)
    age: number;
    
    @IsEmail()
    email: string;

}