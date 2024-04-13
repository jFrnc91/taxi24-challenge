import { EntityRepository } from '@mikro-orm/sqlite';
import { Driver } from './driver.entity';

export class DriverRepository extends EntityRepository<Driver> {}
