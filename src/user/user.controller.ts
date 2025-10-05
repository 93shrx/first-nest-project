import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";


@Controller('users')
export class UserController {

    @Post()
    async createUser(@Body() body) {
        return {body};
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
    async updateUserById(@Param() param, @Body() body) {
        return {user:{}, param, body};
    }
    @Delete(':id')
    async deleteUserById(@Param() param) {
        return {user:{}, param};
    }
}