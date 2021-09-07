import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { City } from 'src/app/types';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  cities: City[] | null = null;
  loading = false;
  savedCities: City[] | null = null;
  favoriteCityIds: number[] | null = null;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const favorite: City[] = JSON.parse(localStorage.getItem('cities') || '[]');
    this.favoriteCityIds = favorite.map((item: City) => item.woeid);
  }

  onSearch(event: Event) {
    event.preventDefault();
    if (this.searchTerm.invalid) {
      return;
    }
    this.loading = true;
    this.weatherService
      .searchCity(this.searchTerm.value)
      .subscribe((data: City[]) => {
        this.cities = data;
        this.loading = false;
      });
  }

  onAddFavorite(city: City) {
    this.savedCities = JSON.parse(localStorage.getItem('cities') || '[]');
    const exists = this.savedCities?.filter(
      (item: City) => item.woeid === city.woeid
    );
    if (exists?.length === 0) {
      this.savedCities?.push(city);
      this.favoriteCityIds?.push(city.woeid);
      localStorage.setItem('cities', JSON.stringify(this.savedCities));
    }
  }
}
