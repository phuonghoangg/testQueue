import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(bla): Promise<string> {
    console.log("appService: ",bla);
    return 'Hello World!';
  }
}
