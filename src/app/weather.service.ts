import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City, WeatherResults } from './types';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  searchCity(name: string) {
    const url = `/api/location/search/?query=${name}`;
    return this.http.get<City[]>(url);
  }

  weatherDetails(id: number) {
    const url = `/api/location/${id}/`;
    return this.http.get<WeatherResults>(url);
  }
}
