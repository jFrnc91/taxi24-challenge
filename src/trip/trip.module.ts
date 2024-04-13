import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { Trip } from './trip.entity';
import { DriverModule } from '../driver/driver.module';
import { RiderModule } from '../rider/rider.module';
import { Driver } from '../driver/driver.entity';
import { Rider } from '../rider/rider.entity';

@Module({
  controllers: [TripController],
  exports: [TripService],
  imports: [
    MikroOrmModule.forFeature({ entities: [Trip, Driver, Rider] }),
    DriverModule,
    RiderModule,
  ],
  providers: [TripService],
})
export class TripModule {}
