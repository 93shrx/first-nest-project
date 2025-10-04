import { Body, Controller, Get, Param, Post } from "@nestjs/common";


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
}