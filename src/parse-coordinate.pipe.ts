import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseCoordinatePipe implements PipeTransform {
  transform(value: string): number[] {
    if (!value || !value.includes(',')) {
      throw new BadRequestException(
        'Expected coordinate value in this format: latitude,longitude',
      );
    }
    const [lat, long] = value.split(',').map((x) => Number(x));
    if (Number.isNaN(lat) || typeof lat !== 'number' || lat < -90 || lat > 90) {
      throw new BadRequestException(
        'Latitude must be a number between -90 and 90',
      );
    }
    if (
      Number.isNaN(long) ||
      typeof long !== 'number' ||
      long < -180 ||
      long > 180
    ) {
      throw new BadRequestException(
        'Longitude must be a number between -180 and 180',
      );
    }
    return [lat, long];
  }
}
