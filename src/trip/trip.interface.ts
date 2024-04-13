import { Coordinate } from '../coordinate';

export interface ITrip {
  id: string;
  timestamp: number;
  status: 'in_progress' | 'finished' | 'canceled';
  riderId: string;
  driverId: string;
  fromCoordinate: Coordinate;
  toCoordinate: Coordinate;
}
