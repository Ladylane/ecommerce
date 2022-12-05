import { PurchaseService } from './purchase/purchase.service';
import { PurchaseController } from './purchase/purchase.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: "postgres",
        host: "localhost",
        username: "user",
        password: "user123",
        database: "ecommerce",
        synchronize: false,
        logging: false,
        entities: [
          
        ]
      })
    })

  ],
  controllers: [
    PurchaseController
  ],
  providers: [
    PurchaseService
  ],
})
export class AppModule { }
