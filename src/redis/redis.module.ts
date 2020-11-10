import { DynamicModule } from '@nestjs/common'
import { RedisModule, RedisModuleOptions } from 'nestjs-redis'

export const Redis: DynamicModule = RedisModule.forRootAsync({
  useFactory: (): RedisModuleOptions => {
    return {
      host: process.env.REDISHOST||'localhost',
      port: parseInt(process.env.REDISPORT||"6379")
    }
  }
})