import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { DriverRepository } from './driver.repository';
import { Trip } from '../trip/trip.entity';
import { Coordinate } from '../coordinate';
import crypto from 'crypto';

@Entity({ repository: () => DriverRepository })
export class Driver {
  [EntityRepositoryType]?: DriverRepository;

  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID();
  @Property()
  name: string;
  @Property()
  isAvailable: boolean = true;
  @Property({ type: 'json' })
  currentLocation: Coordinate;
  @OneToMany(() => Trip, (trip) => trip.driver)
  trips = new Collection<Trip>(this);
}
