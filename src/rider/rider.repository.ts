import { EntityRepository } from '@mikro-orm/sqlite';
import { Rider } from './rider.entity';

export class RiderRepository extends EntityRepository<Rider> {}
