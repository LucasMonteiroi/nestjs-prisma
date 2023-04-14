import { Module } from '@nestjs/common';
import { TweetsModule } from './modules/tweets/tweets.module';
import { UsersModule } from './modules/users/users.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [TweetsModule, UsersModule, ApiModule],
})
export class AppModule {}
