import { Injectable } from '@nestjs/common';
import { calculateDistance } from '../calculate-distance';
import { EntityManager, serialize } from '@mikro-orm/core';
import { DriverRepository } from './driver.repository';

@Injectable()
export class DriverService {
  constructor(
    private readonly driverRepository: DriverRepository,
    private readonly em: EntityManager,
  ) {}

  async all() {
    return await this.driverRepository.findAll();
  }

  async availableOnly() {
    return this.driverRepository.findAll({ where: { isAvailable: true } });
  }

  async availableAt(lat: number, long: number, radius: number) {
    const res = await this.driverRepository.findAll({
      where: { isAvailable: true },
    });

    return res.filter((driver) => {
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

  async byId(id: string) {
    return this.driverRepository.findOne({ id });
  }

  async closestTo(coordinates: number[], limit: number) {
    const res = await this.driverRepository.findAll({
      where: { isAvailable: true },
      fields: ['currentLocation'],
    });

    return serialize(res)
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
