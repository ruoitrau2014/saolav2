import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as dotenv from 'dotenv'
import * as helmet from 'helmet'
import * as consolidate from 'consolidate'
import * as path from 'path'
import * as fs from 'fs'
import { NestExpressApplication } from '@nestjs/platform-express'
import { /*RedisModule, */RedisService } from 'nestjs-redis'
import { RedisIoAdapter } from './adapters/redis-io.adapter'
//import { Redis } from './redis/redis.module'
dotenv.config()
 
async function bootstrap() {
  //const keyFile  = fs.readFileSync(__dirname + process.env.SSL_KEY_PATH);
  //const certFile = fs.readFileSync(__dirname + process.env.SSL_CERT_PATH);
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    bodyParser:true,
    /*httpsOptions: {
      key: keyFile,
      cert: certFile,
    }*/
  })
  app.set('trust proxy', 1)
  app.use(helmet({
    contentSecurityPolicy: false,
  }))  
  app.engine('html', consolidate.mustache)
  app.set('view engine', 'html')
  app.set('views', path.join(__dirname,"..", 'views'))
  //app.setBaseViewsDir(path.join(__dirname, '..', 'views'))
  //app.setViewEngine('html')

  const redisService = app.get(RedisService);
  app.useWebSocketAdapter(new RedisIoAdapter(app, redisService));

  await app.listen(process.env.PORT||4000)
}
bootstrap()