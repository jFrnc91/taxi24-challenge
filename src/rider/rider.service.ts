import { Injectable } from '@nestjs/common';
import { IRider } from './rider.interface';

@Injectable()
export class RiderService {
  private readonly riders: IRider[] = [
    {
      id: '1',
      name: 'Jorge',
      currentLocation: {
        latitude: 1,
        longitude: 1,
      },
    },
  ];

  all(): IRider[] {
    return this.riders;
  }

  byId(id: string): IRider {
    return this.riders.find((rider) => rider.id === id);
  }
}
