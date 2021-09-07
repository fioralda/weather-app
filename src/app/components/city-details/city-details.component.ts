import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherResults } from 'src/app/types';
import { WeatherService } from 'src/app/weather.service';
@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
})
export class CityDetailsComponent implements OnInit {
  id: number | null = null;
  res: WeatherResults | null = null;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.weatherService
      .weatherDetails(this.id)
      .subscribe((data: WeatherResults) => {
        this.res = data;
        console.log(this.res);
        this.loading = false;
      });
  }

  getImgSrc(icon: string) {
    const src = `https://www.metaweather.com/static/img/weather/${icon}.svg`;
    return src;
  }
}
