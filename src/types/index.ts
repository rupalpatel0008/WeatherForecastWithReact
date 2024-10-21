export interface LocationState {
  lat: number | null;
  long: number | null;
}

export interface WeatherState {
  data: WeatherDataType | null;
  loading: boolean;
  error: string | null;
}

export interface LatLongParams {
  latitude: number;
  longitude: number;
}

export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    condition: WeatherCondition;
  };
}

export interface WeatherDataType {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: WeatherCondition;
    humidity: number;
    wind_kph: number;
    precip_mm: number;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}
