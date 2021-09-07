import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/types';

@Component({
  selector: 'app-favorite-collection',
  templateUrl: './favorite-collection.component.html',
  styleUrls: ['./favorite-collection.component.css'],
})
export class FavoriteCollectionComponent implements OnInit {
  savedCities: City[] | null = null;

  constructor() {}

  ngOnInit(): void {
    this.savedCities = JSON.parse(localStorage.getItem('cities') || '[]');
  }

  onDelete(city: City) {
    if (this.savedCities != null) {
      this.savedCities = this.savedCities.filter(
        (item: City) => item.woeid != city.woeid
      );
      localStorage.setItem('cities', JSON.stringify(this.savedCities));
    }
  }
}
