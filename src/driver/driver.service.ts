import { Injectable } from '@nestjs/common';
import { IDriver } from './driver.interface';
import { calculateDistance } from '../calculate-distance';

@Injectable()
export class DriverService {
  private readonly drivers: IDriver[] = [
    {
      id: '1',
      name: 'The Driver',
      isAvailable: true,
      currentLocation: {
        // torre bbva
        latitude: 19.4221649,
        longitude: -99.1742946,
      },
    },
    {
      id: '2',
      name: 'Baby',
      isAvailable: true,
      currentLocation: {
        // WTC
        latitude: 19.3933444,
        longitude: -99.1773013,
      },
    },
    {
      id: '3',
      name: 'Max Rockatansky',
      isAvailable: true,
      currentLocation: {
        // auditorio nacional
        latitude: 19.4297761,
        longitude: -99.1976849,
      },
    },
    {
      id: '4',
      name: 'Dominic Toretto',
      isAvailable: true,
      currentLocation: {
        // perisur
        latitude: 19.302935,
        longitude: -99.1906983,
      },
    },
  ];

  all() {
    return this.drivers;
  }

  availableOnly() {
    return this.drivers.filter((driver) => driver.isAvailable === true);
  }

  availableAt(lat: number, long: number, radius: number) {
    return this.drivers.filter((driver) => {
      return (
        driver.isAvailable === true &&
        calculateDistance(
          lat,
          long,
          driver.currentLocation.latitude,
          driver.currentLocation.longitude,
        ) < radius
      );
    });
  }

  byId(id: string) {
    return this.drivers.find((driver: IDriver) => driver.id === id) ?? {};
  }

  closestTo(coordinates: number[], limit: number) {
    return this.drivers
      .filter((d) => d.isAvailable === true)
      .map((d) => ({
        ...d,
        distance: calculateDistance(
          coordinates[0],
          coordinates[1],
          d.currentLocation.latitude,
          d.currentLocation.longitude,
        ),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);
  }
}
