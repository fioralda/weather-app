export interface City {
  woeid: number;
  latt_long: string;
  locations_type: string;
  title: string;
}

export interface CityWeather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface Parent {
  woeid: number;
  title: string;
  location_type: string;
  latt_long: string;
}

export interface Sources {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}

export interface WeatherResults {
  woeid: number;
  consolidated_weather: CityWeather[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: Parent;
  sources: Sources[];
  title: string;
  location_type: string;
  latt_long: string;
  timezone: string;
}
