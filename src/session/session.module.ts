import * as ConnectRedis from 'connect-redis'
import * as session from 'express-session'
import { RedisService } from 'nestjs-redis'
import { NestSessionOptions, SessionModule } from 'nestjs-session'
import { Redis } from '../redis/redis.module'

const RedisStore = ConnectRedis(session)

export const Session = SessionModule.forRootAsync({
  imports: [Redis],
  inject: [RedisService],
  useFactory: (
    redisService: RedisService
  ): NestSessionOptions => {
    const redisClient = redisService.getClient()
    const store = new RedisStore({ client: redisClient as any })
    return {
      session: {
        store,
        secret: process.env.SESSIONSECRET
      }
    }
  }
})