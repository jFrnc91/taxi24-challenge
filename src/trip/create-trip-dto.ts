import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Coordinate } from '../coordinate';
import { Type } from 'class-transformer';

export class CreateTripDto {
  @IsNotEmpty()
  @IsString()
  readonly driverId: string;

  @IsNotEmpty()
  @IsString()
  readonly riderId: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Coordinate)
  readonly fromCoordinate: Coordinate;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Coordinate)
  readonly toCoordinate: Coordinate;
}
