import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  restaurants: any; 
  flag: boolean = true; 

  constructor(private activatedRoute: ActivatedRoute,
              private generalService: GeneralService,
              private router: Router

  ) { }

  ngOnInit() {
    this.generalService.getRestaurants().subscribe(
      response => {
        console.log(response)
      }, 
      error => {
        console.log(error);
      }
    )
  }

}
