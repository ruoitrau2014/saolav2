import { Controller, Post, Param, Get } from '@nestjs/common'
import { RethinkService } from './rethink.service';

@Controller('rethink')
export class RethinkController {
    constructor(private readonly rethinkService: RethinkService) {}

    @Get()
    index(): string {
      return "RethinkDB endpoint"
    }
  
    @Post('table/:name')
    async tableCreate(@Param ('name') name): Promise<string> {
        let response = await this.rethinkService.tableCreate(name)
        .then(result => {
          return "Name " + name + " received!\n" + JSON.stringify(result)
        })
        .catch(reason => {
          return reason
        })
    
        return response
    }   
    @Get('tables') 
    async tableList(): Promise<string> {
        let response = await this.rethinkService.tableList()
        .then(result => {
          return "List all tables!\n" + JSON.stringify(result)
        })
        .catch(reason => {
          return reason
        })
    
        return response
    }   
}
