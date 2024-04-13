import { Injectable } from '@nestjs/common';
import { CreateTripDto } from './create-trip-dto';
import { TripRepository } from './trip.repository';
import { Rider } from '../rider/rider.entity';
import { DriverRepository } from '../driver/driver.repository';
import { RiderRepository } from '../rider/rider.repository';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Driver } from '../driver/driver.entity';
import { Trip } from './trip.entity';
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: DriverRepository,
    @InjectRepository(Rider)
    private readonly riderRepository: RiderRepository,
    @InjectRepository(Trip)
    private readonly tripRepository: TripRepository,
    private readonly em: EntityManager,
  ) {}

  async create(createTripDto: CreateTripDto) {
    const driver = await this.driverRepository.findOneOrFail({
      id: createTripDto.driverId,
    });

    const rider = await this.riderRepository.findOneOrFail({
      id: createTripDto.riderId,
    });

    const newTrip = new Trip(
      rider,
      driver,
      createTripDto.fromCoordinate,
      createTripDto.toCoordinate,
    );

    const res = await this.tripRepository.insert(newTrip);

    return { tripId: res };
  }

  async active() {
    return this.tripRepository.findAll({ where: { status: 'in_progress' } });
  }

  async finish(id: string) {
    const trip = await this.tripRepository.findOneOrFail({ id });
    trip.status = 'finished';
    //this.tripRepository.assign(trip, { status: 'finished' });
    await this.em.persistAndFlush(trip);
  }
}
