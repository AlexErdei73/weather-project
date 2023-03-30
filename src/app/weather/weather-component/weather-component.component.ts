import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css'],
})
export class WeatherComponentComponent implements OnInit {
  public city!: City;
  public message!: string;
  public data!: Observable<Object>;
  constructor() {
    this.city = { name: 'Budapest', temperature: 0 }; //Initialise with a city
  }

  ngOnInit(): void {
    this.message = 'Initial values';
  }

  private url(city: string): string {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=db5f1eb9b2cd1a0d24607c0b04e5887b`;
  }

  changeCity(cityForm: { valid: any }) {
    if (cityForm.valid) {
      console.log(this.city);
    } else {
      this.message = 'Form is invalid!';
      console.error(new Error(this.message));
    }
  }
}
