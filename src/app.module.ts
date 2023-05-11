import { PurchaseModule } from './modules/purchase/purchase.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseSchema } from './modules/purchase/schemas/purchase.schema';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

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
        synchronize: true,
        logging: true,
        entities: [PurchaseSchema],
      }),
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
