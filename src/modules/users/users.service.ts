import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private repository: UsersRepository) { }

    async createUser(params: {
        name: User[`name`];
        username: User[`username`];
        email: User[`email`];
    }) {
        const { name, username, email } = params;

        const user = await this.repository.createUser({
            data: {
                name,
                username,
                email
            }
        });

        return user;
    }

    async updateUser(params: {
        userId: User['id']
        data: {
            username?: User[`username`];
            email?: User[`email`];
        }
    }) {
        const { userId, data } = params;

        const user = await this.repository.updateUser({
            where: {
                id: Number(userId)
            },
            data
        })

        return user;
    }

    async getUsers() {
        const users = await this.repository.getUsers({});
        return users;
    }

    async deleteUserSoft(params: {
        userId: User['id']
    }) {
        const { userId } = params;
        await this.repository.deactiveUser({
            where: {
                id: Number(userId)
            }
        })
    }

    async deleteUser(params: {
        userId: User['id']
    }) {
        const { userId } = params;

        await this.repository.deleteUser({
            where: {
                id: Number(userId)
            }
        });
    }
}
