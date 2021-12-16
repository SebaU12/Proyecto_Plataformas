import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';
import { Router } from "@angular/router";
import { TextZoom, SetOptions, GetResult } from "@capacitor/text-zoom";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  restaurants: any; 
  flag: boolean = true; 
  public imagen: string = "https://as01.epimg.net/deporteyvida/imagenes/2019/07/29/portada/1564417400_281538_1564417513_noticia_normal.jpg"

  constructor(private activatedRoute: ActivatedRoute,
              private generalService: GeneralService,
              private router: Router

  ) { }

  ngOnInit() {
    this.generalService.getRestaurants().subscribe(
      response => {
        console.log(response)
        this.restaurants = response;
      }, 
      error => {
        console.log(error);
      }
    )
  }

  makezoom(val: any){
    TextZoom.get().then((val1:GetResult) => {
      var currentZoom = val1.value;
      var options:SetOptions={
        value : currentZoom + parseFloat(val)
      }
      TextZoom.set(options)
    })
  }

}
