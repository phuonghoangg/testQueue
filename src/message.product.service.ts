import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { AppService } from './app.service';

@Injectable()
export class MessageProductService {
    constructor(@InjectQueue('message-queue') private messQueue:Queue,
        private appService:AppService){}

    //đá dữ liệu qua consumer.
    async sendMessage(msg:string){
         const bla =  await this.messQueue.add('message-job',{
            text:msg
        },{delay:10000});


       
    }
   
}
