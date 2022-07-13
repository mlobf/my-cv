import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('werwer');
    return 'Teste 1234';
  }
}
