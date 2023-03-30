import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css'],
})
export class WeatherComponentComponent implements OnInit {
  public cityName!: string;
  public temperature!: number;
  constructor() {}

  ngOnInit(): void {
    this.cityName = 'Budapest'; //Initialise with a city
    this.temperature = 0;
  }

  private url(city: string): string {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=db5f1eb9b2cd1a0d24607c0b04e5887b`;
  }
}
