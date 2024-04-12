import { Test, TestingModule } from '@nestjs/testing';
import { RiderController } from './rider.controller';

describe('RidersController', () => {
  let controller: RiderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiderController],
    }).compile();

    controller = module.get<RiderController>(RiderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
