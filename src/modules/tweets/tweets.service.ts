import { Injectable } from '@nestjs/common';
import { Tweet, User } from '@prisma/client';
import { TweetsRepository } from './tweets.repository';

@Injectable()
export class TweetsService {
    constructor(private repository: TweetsRepository) { }

    async createTweet(params: { content: Tweet[`content`]; userId: User[`id`] }) {
        const { content, userId } = params;

        const tweet = await this.repository.createTweet({
            data: {
                content,
                user: {
                    connect: {
                        id: Number(userId),
                    },
                },
            },
        });

        return tweet;
    }

    async getTweets() {
        const tweets = await this.repository.getTweets({});

        return tweets;
    }

    async getTweetsByUser(params: { userId: User['id'] }) {
        const { userId } = params;

        const tweets = await this.repository.getTweets({
            where: {
                userId: Number(userId)
            }
        })

        return tweets;
    }

    async deleteTweet(params: { tweetId: Tweet['id'] }) {
        const { tweetId } = params;
        const deleted = await this.repository.deleteTweet({
            where: {
                id: Number(tweetId)
            }
        })
        console.log(deleted);
    }
}
