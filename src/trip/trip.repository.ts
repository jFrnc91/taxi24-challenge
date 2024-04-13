import { EntityRepository } from '@mikro-orm/sqlite';
import { Trip } from './trip.entity';

export class TripRepository extends EntityRepository<Trip> {}
