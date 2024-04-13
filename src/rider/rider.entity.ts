import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { RiderRepository } from './rider.repository';
import { Trip } from '../trip/trip.entity';
import { Coordinate } from '../coordinate';
import crypto from 'crypto';

@Entity({ repository: () => RiderRepository })
export class Rider {
  [EntityRepositoryType]?: RiderRepository;

  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID();
  @Property()
  name: string;
  @Property({ type: 'json' })
  currentLocation: Coordinate;
  @OneToMany(() => Trip, (trip) => trip.rider)
  trips = new Collection<Trip>(this);
}
