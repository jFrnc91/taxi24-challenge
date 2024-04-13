import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTripDto } from './create-trip-dto';
import { TripService } from './trip.service';

@Controller('trips')
export class TripController {
  constructor(private tripService: TripService) {}

  @Get('active')
  async active() {
    return this.tripService.active();
  }

  @Post()
  async request(@Body() createRideDto: CreateTripDto) {
    return this.tripService.create(createRideDto);
  }

  @Patch(':id/finish')
  async finish(@Param('id') id: string) {
    return this.tripService.finish(id);
  }
}
