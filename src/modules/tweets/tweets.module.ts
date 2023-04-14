import { Module } from '@nestjs/common';
import { TweetsController } from '../../api/controllers/tweets.controller';
import { PrismaModule } from '../../database/prisma.module';
import { TweetsRepository } from './tweets.repository';
import { TweetsService } from './tweets.service';

@Module({
  imports: [PrismaModule],
  providers: [TweetsRepository, TweetsService],
  exports: [TweetsService],
  controllers: [TweetsController]
})
export class TweetsModule {}

