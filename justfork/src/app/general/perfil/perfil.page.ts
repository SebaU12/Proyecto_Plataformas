import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular'; 
import { GeneralService } from '../general.service';
import { Router } from "@angular/router";
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public user_name: string;
  public user_lname: string;
  public ubication: string;
  public email: string;

  constructor(private activatedRoute: ActivatedRoute,
              private generalService: GeneralService,
              private alertController: AlertController,
              private actionSheet: ActionSheetController,
              private router: Router

  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.generalService.getAdminData().subscribe(
      response => {
        this.user_name = response.user_name
        this.user_lname = response.user_lname
        this.ubication= response.ubication
        this.email= response.email
      },
      error => console.log(error),
            )
    }

    logOut(){
      localStorage.clear();
      this.router.navigateByUrl('/home')
    }

  async alertar(){
    const alert = await this.alertController.create({
      header: 'Eliminar Cuenta', 
      message: '¿Estas seguro que quieres eliminar tu cuenta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
        },
        {
          text: 'Aceptar',
          role: 'aceptar',
          handler: ()=>{
            this.deleteCuenta(); 
          }
        }
      ]
    })
    await alert.present(); 
  }
  deleteCuenta(){
    this.generalService.deleteAdmin().subscribe(result => {}, error => console.log(error))
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }
}
