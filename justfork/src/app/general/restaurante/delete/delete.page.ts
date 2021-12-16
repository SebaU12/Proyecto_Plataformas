import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { GeneralService } from '../../general.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  public id:number = 0;  
  public restaurant:any | string = ""; 
  public imagen: string = "https://as01.epimg.net/deporteyvida/imagenes/2019/07/29/portada/1564417400_281538_1564417513_noticia_normal.jpg"
  public flag: boolean = true; 

  constructor(private generalService: GeneralService, 
              private activatedRoute: ActivatedRoute,
              private alertController: AlertController,
              private router: Router,
              private actionSheet: ActionSheetController) { 
  }

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
        if(this.restaurant.imageUrl != ""){
          this.flag = false;
        }
      }, 
      error => {
        console.log(error);
      }
    )
  }
  
  async alertar(){
    const alert = await this.alertController.create({
      header: 'Eliminar Restaurante', 
      subHeader: 'Eliminar ' + this.restaurant.restaurant_name,
      message: '¿Estas seguro que quieres eliminar este restaurante?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
        },
        {
          text: 'Aceptar',
          role: 'aceptar',
          handler: ()=>{
            this.deleteRestaurant(); 
          }
        }
      ]
    })
    await alert.present(); 
  }
  deleteRestaurant(){
    this.generalService.deleteRestaurant().subscribe(
      response => {
        console.log(response)
        localStorage.clear();
        this.router.navigateByUrl('/login/1')
      }, 
      error => {
        console.log(error); 
    })
  }

  cancelAction(){
    this.router.navigateByUrl('/restaurante')
  }
}
