import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ProductModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// product
// order model
// user model and user adm