import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() data: {
        name: string,
        username: string,
        email: string
    }) {
        const { name, username, email } = data;

        return await this.usersService.createUser({
            name,
            username,
            email
        });
    }

    @Patch(":userId")
    async updateUser(@Body() data: {
        username?: string,
        email?: string
    },
    @Param('userId') userId: number) {
        return await this.usersService.updateUser({
            userId,
            data,
        });
    }

    @Get()
    async getUsers() {
        return await this.usersService.getUsers();
    }

    @Delete(':userId')
    async deleteUser(@Param('userId') userId: number) {
        return await this.usersService.deleteUser({
            userId
        });
    }
}

