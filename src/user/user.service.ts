import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}
    
    async createUser({name, age, email}: CreateUserDto){
       return await this.prisma.user.create({data:{name, age, email}});
    }

    async getUsers(){
        return await this.prisma.user.findMany();
    }

    async getUserById(id: number){
        return await this.prisma.user.findUnique({where:{id}});
    }

    async updateUserById(id: number, {name, age, email}: Partial<CreateUserDto>){
        return await this.prisma.user.update({where:{id}, data:{name, age, email}});
    }

    async deleteUserById(id: number){
        return await this.prisma.user.delete({where:{id}});
    }
}