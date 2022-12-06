/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseService {

    getHello(): string {
        return 'Hello World!';
      }
 }
