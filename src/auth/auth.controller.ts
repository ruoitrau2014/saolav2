import { Controller, Req, UseGuards, Post, Query, Session, Get, Redirect } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as request from 'request'
import { promisify } from 'util'

//let requestPostPromise = promisify(request.post)
let requestGetPromise = promisify(request.get)

@Controller('auth')
export class AuthController {
    
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req, @Session() session:any) {
    if(req.user?.id){
      session.ID = req.user.id
      session.name = req.user.name
      session.email = req.user.email
    }
    return req.user;
  }

  @Post('facebook')
  async facebook(@Query('access_token') access_token:string, @Session() session:any) {
    if(access_token){
      try{
        //requestPostPromise
        let options = {
          url: `https://graph.facebook.com/v8.0/me?access_token=${access_token}&debug=all&fields=id%2Cname%2Cpicture%2Cemail&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors`,
          headers: {
              //'Content-Type': 'application/json',
              //'Accept': 'application/json',
              'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
              //'X-platform': 'Node'
          },
          timeout: 60000
        };

        let res = await requestGetPromise(options)
        let body:any = res.body+""
        body = JSON.parse(body)
        session = session ?? {}
        session.ID = body.id
        session.name = body.name
        session.email = body.email
        session.avatar = body.picture?.data?.url??''
        session.type = 'fb'
        return {
          id : session.ID,
          name : session.name,
          email : session.email,
          avatar : session.avatar,
          type : 'fb'
        }
      }catch(e){
        console.log(e)
      }

    }
    return {
      "statusCode": 401,
      "message": ["Unauthorized Error"],
      "error": "Unauthorized Error"
    }
  }

  @Get('logout')
  //@Redirect('/', 302)
  async logout(@Session() session:any) {
    delete session.ID 
    delete session.name  
    delete session.email  
    delete session.avatar  
    delete session.type  
    return {
      url: '/'
    }
  }

  @Post('google')
  async google(@Query('access_token') access_token:string, @Session() session:any) {
    if(access_token){
      try{
        //requestPostPromise
        let options = {
          url: `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${access_token}`,
          headers: {
              //'Content-Type': 'application/json',
              //'Accept': 'application/json',
              'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
              //'X-platform': 'Node'
          },
          timeout: 60000
        };

        let res = await requestGetPromise(options)
        let body:any = res.body+""
        body = JSON.parse(body)
        session = session ?? {}
        session.ID = body.id
        session.name = body.name
        session.email = body.email
        session.avatar = body.picture
        session.type = 'gg'
        return {
          id : session.ID,
          name : session.name,
          email : session.email,
          avatar : session.avatar,
          type : 'gg'
        }
      }catch(e){
        console.log(e)
      }

    }
    return {
      "statusCode": 401,
      "message": ["Unauthorized Error"],
      "error": "Unauthorized Error"
    }
  }
}