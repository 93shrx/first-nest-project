import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseInterceptors } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdatePatchUserDto } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "./interceptors/log.interceptor";


@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @UseInterceptors(LogInterceptor)
    @Post()
    async createUser(@Body() {name, age, email}: CreateUserDto) {
        return this.userService.createUser({name, age, email});
    }

    @Get()
    async getAllUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id) {
        return this.userService.getUserById(id);
    }

    @Patch(':id')
    async updateUserById(@Param('id', ParseIntPipe) id, @Body() {name, age, email}: UpdatePatchUserDto) {
        return this.userService.updateUserById(id, {name, age, email});
    }
    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id) {
        return this.userService.deleteUserById(id);
    }
}