import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { RiderRepository } from './rider.repository';

@Injectable()
export class RiderService {
  constructor(
    private readonly riderRepository: RiderRepository,
    private readonly em: EntityManager,
  ) {}

  async all() {
    return this.riderRepository.findAll();
  }

  async byId(id: string) {
    return this.riderRepository.findOne({ id });
  }
}
