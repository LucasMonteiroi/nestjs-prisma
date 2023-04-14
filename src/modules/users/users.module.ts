import { Module } from '@nestjs/common';
import { UsersController } from '../../api/controllers/users.controller';
import { PrismaModule } from '../../database/prisma.module';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
    imports: [PrismaModule],
    providers: [UsersRepository, UsersService],
    exports: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
