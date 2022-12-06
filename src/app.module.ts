import { PurchaseModule } from './modules/purchase/purchase.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PurchaseModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: "postgres",
        host: "localhost",
        username: "user",
        password: "user123",
        database: "ecommerce",
        synchronize: false,
        logging: false,
        entities: []
      })
    }),
  ],
})
export class AppModule { }
