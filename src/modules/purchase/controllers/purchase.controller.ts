/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from '../services/purchase.service';

@Controller("/purchases")
export class PurchaseController {

  constructor(private readonly purchaseService: PurchaseService) {
  }

  @Get()
  getHello(): string {
    return this.purchaseService.getHello();
  }
}