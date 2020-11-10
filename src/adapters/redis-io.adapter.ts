import { IoAdapter } from '@nestjs/platform-socket.io';
import * as io from 'socket.io'
import * as redisIoAdapter from 'socket.io-redis';
import { RedisService } from 'nestjs-redis'
import * as redis from 'redis'

export class RedisIoAdapter extends IoAdapter {
    protected ioServer: io.Server
    constructor(app:any, private readonly redisService: RedisService) {    
        super()          
        let httpServer = app.getHttpServer()        
        this.ioServer = io(httpServer)         
    }    
    createIOServer(port: number, options?: io.ServerOptions): any {
        let server
        if(port==0 || port == parseInt(process.env.PORT || '4000'))
            server = this.ioServer 
        else  
            server = super.createIOServer(port, options);
        /*/console.log(process.env.REDISHOST)
        for(let i in this.redisService){
            console.log(i,this.redisService[i])
        }*/
        
        const pub = this.redisService.getClient()
        const sub = redis.createClient({
            host: process.env.REDISHOST||'localhost',
            port: parseInt(process.env.REDISPORT||"6379")
        })// this.redisService.getClient()
        const redisAdapter = redisIoAdapter({ pubClient: pub, subClient: sub });
        //const redisAdapter = redisIoAdapter({ port: parseInt(process.env.REDISPORT || '6379'), host: process.env.REDISHOST || 'localhost' });

        server.adapter(redisAdapter);
        return server;
    }
}