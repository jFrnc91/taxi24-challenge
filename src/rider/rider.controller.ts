import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller('riders')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  async all() {
    return this.riderService.all();
  }

  @Get(':id')
  async byId(@Param('id') id: string) {
    return this.riderService.byId(id);
  }
}
