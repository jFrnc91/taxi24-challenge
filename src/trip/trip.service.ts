import { Injectable } from '@nestjs/common';
import { ITrip } from './trip.interface';
import { CreateTripDto } from './create-trip-dto';
import crypto from 'crypto';

@Injectable()
export class TripService {
  trips: ITrip[] = [];

  create(createRideDto: CreateTripDto) {
    const newTrip: ITrip = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      riderId: createRideDto.riderId,
      driverId: createRideDto.driverId,
      fromCoordinate: createRideDto.fromCoordinate,
      toCoordinate: createRideDto.toCoordinate,
      status: 'in_progress',
    };

    this.trips.push(newTrip);

    return { id: newTrip.id };
  }

  active() {
    return this.trips.filter((d) => d.status === 'in_progress');
  }

  finish(id: string) {
    const tripIndex = this.trips.findIndex((trip) => trip.id === id);
    if (tripIndex !== -1 && this.trips[tripIndex].status === 'in_progress') {
      this.trips[tripIndex].status = 'finished';
    }
  }
}
