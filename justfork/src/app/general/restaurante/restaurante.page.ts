import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';
import { CookieService } from "ngx-cookie-service";
import { Storage } from '@ionic/storage-angular'; 
import { Router } from "@angular/router";

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  public flag: boolean = false; 

  constructor(private activatedRoute: ActivatedRoute,
              private generalService: GeneralService,
              private storage: Storage,
              private router: Router, 
              private cookieService: CookieService) { }

  ngOnInit() {
    this.checkRestaurant();
  }

  checkRestaurant(){
    this.generalService.getResId().subscribe(
      response => {
        if(response.id == 0){
          alert("No tiene un restaurante a su nombre, vamos a crearlo!")
          this.router.navigateByUrl('/restaurante/crear')
        } else {
          this.flag = true; 
        }
      }, 
      error => {
        console.log(error);
      }
    )
  }

  redirecToview(){
    this.router.navigateByUrl('/restaurante/ver')
  }

  redirecToedit(){
    this.router.navigateByUrl('/restaurante/editar')
  }

  redirecTodelete(){
    this.router.navigateByUrl('/restaurante/delete')
  }

}
