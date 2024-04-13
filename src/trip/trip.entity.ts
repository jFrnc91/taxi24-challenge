import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Coordinate } from '../coordinate';
import crypto from 'crypto';
import { TripRepository } from './trip.repository';
import { Rider } from '../rider/rider.entity';
import { Driver } from '../driver/driver.entity';

@Entity({ repository: () => TripRepository })
export class Trip {
  [EntityRepositoryType]?: TripRepository;

  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID();
  @Property()
  timestamp: number = Date.now();
  @Property()
  status: string = 'in_progress'; //'in_progress' | 'finished' | 'canceled';
  @ManyToOne(() => Rider)
  rider: Rider;
  @ManyToOne(() => Driver)
  driver: Driver;
  @Property({ type: 'json' })
  fromCoordinate: Coordinate;
  @Property({ type: 'json' })
  toCoordinate: Coordinate;

  constructor(
    rider: Rider,
    driver: Driver,
    fromCoordinate: Coordinate,
    toCoordinate: Coordinate,
  ) {
    this.rider = rider;
    this.driver = driver;
    this.fromCoordinate = fromCoordinate;
    this.toCoordinate = toCoordinate;
  }
}
