import { PurchaseModule } from './modules/purchase/purchase.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseSchema } from './modules/purchase/schemas/purchase.schema';

@Module({
  imports: [
    PurchaseModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: 'localhost',
        username: 'user',
        password: 'user123',
        database: 'ecommerce',
        synchronize: false,
        logging: false,
        entities: [PurchaseSchema],
      }),
    }),
  ],
})
export class AppModule {}
