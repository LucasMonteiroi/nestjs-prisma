import { Module } from '@nestjs/common';
import { TweetsModule } from 'src/modules/tweets/tweets.module';
import { UsersModule } from 'src/modules/users/users.module';
import { TweetsController } from './controllers/tweets.controller';
import { UsersController } from './controllers/users.controller';

@Module({
    imports: [TweetsModule, UsersModule],
    controllers: [TweetsController, UsersController]
})
export class ApiModule {}
