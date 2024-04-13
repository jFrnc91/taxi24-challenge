import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Driver } from '../driver/driver.entity';
import { Rider } from '../rider/rider.entity';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    em.create(Driver, {
      id: '637add2a-2386-45a2-b535-ec370702c792',
      name: 'The Driver',
      //isAvailable: true,
      currentLocation: {
        // torre bbva
        latitude: 19.4221649,
        longitude: -99.1742946,
      },
    });
    em.create(Driver, {
      id: 'cbc249fb-68fc-4687-8f7d-134dd35fb14a',
      name: 'Baby',
      isAvailable: true,
      currentLocation: {
        // WTC
        latitude: 19.3933444,
        longitude: -99.1773013,
      },
    });
    em.create(Driver, {
      id: 'aed67ad1-e0db-4064-a2b7-18a06ae95ad9',
      name: 'Max Rockatansky',
      isAvailable: true,
      currentLocation: {
        // auditorio nacional
        latitude: 19.4297761,
        longitude: -99.1976849,
      },
    });
    em.create(Driver, {
      id: '3fffa70a-fab2-428e-91a5-797c0be876f3',
      name: 'Dominic Toretto',
      isAvailable: true,
      currentLocation: {
        // perisur
        latitude: 19.302935,
        longitude: -99.1906983,
      },
    });

    em.create(Rider, {
      id: '8522e224-492b-4eba-82d4-995c90a234b2',
      name: 'Jorge',
      currentLocation: {
        latitude: 19.406072,
        longitude: -99.1709473,
      },
    });
  }
}
