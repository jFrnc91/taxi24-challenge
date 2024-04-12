import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller('riders')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  all() {
    return this.riderService.all();
  }

  @Get(':id')
  byId(@Param('id') id: string) {
    return this.riderService.byId(id);
  }
}
