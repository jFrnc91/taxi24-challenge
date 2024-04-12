import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTripDto } from './create-trip-dto';
import { TripService } from './trip.service';

@Controller('trips')
export class TripController {
  constructor(private tripService: TripService) {}

  @Get('active')
  active() {
    return this.tripService.active();
  }

  @Post()
  request(@Body() createRideDto: CreateTripDto) {
    return this.tripService.create(createRideDto);
  }

  @Patch(':id/finish')
  finish(@Param('id') id: string) {
    this.tripService.finish(id);
  }
}
