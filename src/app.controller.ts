import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProductService } from './message.product.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly messageProductService:MessageProductService
    ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  //controller đá qua producer.service
  @Get('send-mess')
 async sendMessage(@Query('msg') msg:string){
   return await this.messageProductService.sendMessage(msg)
  }
}
