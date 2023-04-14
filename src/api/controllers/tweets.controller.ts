import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TweetsService } from '../../modules/tweets/tweets.service';

@ApiTags('tweets')
@Controller('tweets')
export class TweetsController {
    constructor(private readonly tweetsService: TweetsService) { }

    @Post()
    async createTweet(@Body() data: { content: string; userId: string }) {
        const { content, userId } = data;
        return this.tweetsService.createTweet({
            content,
            userId: Number(userId),
        });
    }

    @Get()
    async getTweets() {
        return await this.tweetsService.getTweets();
    }

    @Get(':userId')
    async getTweetsById(@Param('userId') userId: number) {
        return await this.tweetsService.getTweetsByUser({
            userId
        })
    }

    @Delete(':tweetId')
    async deleteTweet(@Param('tweetId') tweetId: number) {
        return await this.tweetsService.deleteTweet({
            tweetId
        });
    }
}

