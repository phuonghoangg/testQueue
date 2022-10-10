import { Process, Processor } from '@nestjs/bull'
import { Job } from 'bull';
import { AppService } from './app.service';
@Processor('message-queue')
export class MessageConsumer {
    constructor(private appService: AppService) { }


    // từ controller đá qua đây để gọi tới service chờ
    @Process('message-job')
    async messagejob(job: Job<unknown>) {
        console.log("mess.consumer",job.data);
        if (job.data) {
            return await this.appService.getHello(job.data)
        }
    }
}