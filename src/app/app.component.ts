import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None

})

export class AppComponent implements OnInit {
  mcountry = "US"
  mcity = "Kansas City"
  weatherReport = {};
  presentWeather = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.getDetails();
    this.getWeatherDetails();
  }

  getDetails() {
        if(this.mcity == '' || this.mcountry == ''){
          alert("Enter the city and country to see the weather details")
        } else {
          this.http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=' + this.mcity + ',' + this.mcountry + '&cnt=3&units=imperial&appid=33ac676c0de640f4cb8355ed006d4e89')
            .subscribe((resp)=>{
              this.weatherReport= resp;
              this.getWeatherDetails();
        });
  }
  }

  getWeatherDetails() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=' + this.mcity + ',' + this.mcountry + '&cnt=3&units=imperial&appid=33ac676c0de640f4cb8355ed006d4e89')
      .subscribe((resp) => {
        this.presentWeather = resp;

      });
  }

}
