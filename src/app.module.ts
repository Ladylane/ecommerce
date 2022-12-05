import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseService } from './purchase/purchase.service';
import { PurchaseController } from './purchase/purchase.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    
    
  ],
  controllers: [
    PurchaseController
  ],
  providers: [
    PurchaseService
  ],
})
export class AppModule { }
