export interface IDriver {
  id: string;
  name: string;
  isAvailable: boolean;
  currentLocation: {
    latitude: number;
    longitude: number;
  };
}
