import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../models/news';
import { Users } from '../models/Users';
import { Weather } from '../models/Weather';
import { RevAPIService } from '../services/rev-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  text2: string = "";
  resultado: string = "";
  listOfNewsArticles: News[] = [];
  listOfWeatherForecast:Weather[]=[];
  listOfUsers:Users[]=[];

  constructor(private revApi: RevAPIService, private router: Router) { }

  ngOnInit(): void {
  }


  getusers() {
    this.revApi.Users().subscribe((response) => {

      //It will set the show property to false to each element and also add it to our listOfRest
      response.forEach(element => {
        
        this.listOfUsers.push(element);
      });
    });
      //It will set the show property to false to each element and also add it to our listOfRest



  }

}

