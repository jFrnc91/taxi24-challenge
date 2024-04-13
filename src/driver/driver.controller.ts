import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { ParseCoordinatePipe } from '../parse-coordinate.pipe';
import { ApiOperation } from '@nestjs/swagger';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  @ApiOperation({ summary: 'Get all driver' })
  async all() {
    return this.driverService.all();
  }

  @Get('available')
  async availableOnly() {
    return this.driverService.availableOnly();
  }

  @Get('available-at')
  async availableAt(
    @Query('coor', ParseCoordinatePipe) coor: number[],
    @Query('radius', new DefaultValuePipe(3_000), ParseIntPipe) radius: number,
  ) {
    return this.driverService.availableAt(coor[0], coor[1], radius);
  }

  @Get('closest-to')
  async closestTo(
    @Query('coor', ParseCoordinatePipe) coordinates: number[],
    @Query('limit', new DefaultValuePipe(3), ParseIntPipe) limit: number,
  ) {
    return this.driverService.closestTo(coordinates, limit);
  }

  @Get(':id')
  async byId(@Param('id') id: string) {
    return this.driverService.byId(id);
  }
}
