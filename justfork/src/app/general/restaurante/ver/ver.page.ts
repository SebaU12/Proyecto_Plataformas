import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../general.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {
  public id:number = 0;  
  public restaurant:any | string = ""; 
  public admin: string = ""
  public imagen: string = "https://as01.epimg.net/deporteyvida/imagenes/2019/07/29/portada/1564417400_281538_1564417513_noticia_normal.jpg"
  public flag: boolean = true; 

  constructor(private activatedRoute: ActivatedRoute,
              private generalService: GeneralService,
              private router: Router, 
              ) { }

  ngOnInit() {
    this.checkRestaurant()
  }

  checkRestaurant(){
    this.generalService.getResId().subscribe(
      response => {
        if(response.id == 0){
          alert("No tiene un restaurante a su nombre, vamos a crearlo!")
          this.router.navigateByUrl('/restaurante/crear')
        } else {
          this.id = response.id; 
          this.getRestaurant(); 
          this.getAdminData();
        }
      }, 
      error => {
        console.log(error);
      }
    )
  }

  getRestaurant(){
    this.generalService.getRestaurantData(this.id).subscribe(
      response => {
        console.log(response); 
        this.restaurant = response; 
      }, 
      error => {
        console.log(error);
      }
    )
  }

  getAdminData(){
    this.generalService.getAdmin().subscribe(
      response => {
        this.admin = response; 
      }, 
      error => {
        console.log(error);
      }
    )
  }
}
