import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { IDriver } from './driver.interface';
import { DriverService } from './driver.service';
import { ParseCoordinatePipe } from '../parse-coordinate.pipe';
import { ApiOperation } from '@nestjs/swagger';

@Controller('drivers')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  @ApiOperation({ summary: 'Get all driver' })
  all(): IDriver[] {
    return this.driverService.all();
  }

  @Get('available')
  availableOnly(): IDriver[] {
    return this.driverService.availableOnly();
  }

  @Get('available-at')
  availableAt(
    @Query('coor', ParseCoordinatePipe) coor: number[],
    @Query('radius', new DefaultValuePipe(3_000), ParseIntPipe) radius: number,
  ): IDriver[] {
    return this.driverService.availableAt(coor[0], coor[1], radius);
  }

  @Get('closest-to')
  closestTo(
    @Query('coor', ParseCoordinatePipe) coordinates: number[],
    @Query('limit', new DefaultValuePipe(3), ParseIntPipe) limit: number,
  ) {
    return this.driverService.closestTo(coordinates, limit);
  }

  @Get(':id')
  byId(@Param('id') id: string) {
    return this.driverService.byId(id);
  }
}
