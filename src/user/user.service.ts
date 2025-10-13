import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}
    
    async createUser({name, age, email}: CreateUserDto){
       return await this.prisma.user.create({data:{name, age, email}});
    }
}