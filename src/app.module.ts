import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverController } from './driver/driver.controller';
import { DriverService } from './driver/driver.service';
import { RiderController } from './rider/rider.controller';
import { RiderService } from './rider/rider.service';
import { TripController } from './trip/trip.controller';
import { TripService } from './trip/trip.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    DriverController,
    RiderController,
    TripController,
  ],
  providers: [AppService, DriverService, RiderService, TripService],
})
export class AppModule {}
