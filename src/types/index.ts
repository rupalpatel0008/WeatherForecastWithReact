export interface SearchbarProps {
  onSearch: (query: string) => void;
}

export interface LocationState {
  lat: number | null;
  long: number | null;
}

export interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}

export interface LatLongParams {
  latitude: number;
  longitude: number;
}
