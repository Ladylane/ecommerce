/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseController } from './controllers/purchase.controller';
import { PurchaseModel } from './models/purchase.model';
import { PurchaseService } from './services/purchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseModel])],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
