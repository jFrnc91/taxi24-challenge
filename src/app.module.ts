import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DriverModule } from './driver/driver.module';
import { RiderModule } from './rider/rider.module';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [MikroOrmModule.forRoot(), DriverModule, RiderModule, TripModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
