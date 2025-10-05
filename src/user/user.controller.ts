import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
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
    async getUserById(@Param('id', ParseIntPipe) id) {
        return {user:{}, id};
    }

    @Patch(':id')
    async updateUserById(@Param('id', ParseIntPipe) id, @Body() {name, age, email}: UpdatePatchUserDto) {
        return {user:{}, id, name, age, email};
    }
    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id) {
        return {user:{}, id};
    }
}