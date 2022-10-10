import { Module } from '@nestjs/common';
import {BullModule} from '@nestjs/bull'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageProductService } from './message.product.service';
import { MessageConsumer } from './message.consumer';

@Module({
  imports: [
    BullModule.forRoot({
      redis:{
        host:'localhost',
        port:5003,
      }
    }),
    BullModule.registerQueue({
      name:"message-queue",
    })
  ],
  controllers: [AppController],
  providers: [AppService, MessageProductService,MessageConsumer],
})
export class AppModule {}
