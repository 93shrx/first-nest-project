import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdatePatchUserDto } from "./dto/update-patch-user.dto";


@Controller('users')
export class UserController {

    @Post()
    async createUser(@Body() {name, age, email}: CreateUserDto) {
        return {user:{name, age, email}};
    }

    @Get()
    async getAllUsers() {
        return {users:[]};
    }

    @Get(':id')
    async getUserById(@Param() param) {
        return {user:{}, param};
    }

    @Patch(':id')
    async updateUserById(@Param() param, @Body() {name, age, email}: UpdatePatchUserDto) {
        return {user:{}, param, name, age, email};
    }
    @Delete(':id')
    async deleteUserById(@Param() param) {
        return {user:{}, param};
    }
}