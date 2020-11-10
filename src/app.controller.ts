import { Controller, Get, Post, Req, Res, Body, Param, Render } from '@nestjs/common'
import { AppService } from './app.service'
//import { Request, Response } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index(/*@Res() res: Response*/) {
    /*res.render('index',*/
    return {
      partials: {
        header: 'header',
        footer: 'footer',
      }
    }/*)*/
  }

  @Get('stores')
  @Render('stores')
  stores(/*@Res() res: Response*/) {
    /*res.render('stores',*/return {
      app: 'stores',
      partials: {
        header: 'header',
        footer: 'footer',
      }
    }/*)*/
  }

  @Get('news')
  @Render('news')
  news(/*@Res() res: Response*/) {
    /*res.render('news',*/return {      
      partials: {
        header: 'header',
        footer: 'footer',
      }
    }/*)*/
  }

  @Get('store')
  @Render('store')
  store(/*@Res() res: Response*/) {
    /*res.render('store',*/return {      
      partials: {
        header: 'header',
        footer: 'footer',
      }
    }/*)*/
  }

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test/socketio')
  @Render('test/socketio')
  testNodejs(): object {
    return {};
    }
 
}
