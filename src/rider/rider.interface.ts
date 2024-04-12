export interface IRider {
  id: string;
  name: string;
  currentLocation: {
    latitude: number;
    longitude: number;
  };
}
