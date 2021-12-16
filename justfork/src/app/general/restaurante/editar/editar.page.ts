import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../general.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
import { CameraService } from '../../camera.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  public restForm: FormGroup;
  public myres: any; 

  constructor(private activatedRoute: ActivatedRoute,
              private generalService: GeneralService,
              private cameraService: CameraService,
              private router: Router, 
              private formBuilder: FormBuilder) { 
                this.restForm= this.formBuilder.group({
                  restaurant_name: [''],
                  ubication: [''],
                  imageUrl: [''], 
                });
              }

  ngOnInit() {
    this.checkRestaurant();
  }

  checkRestaurant(){
    this.generalService.getResId().subscribe(
      response => {
        if(response.id == 0){
          alert("NO tiene restaurante a su nombre, vamos a crear uno")
          this.router.navigateByUrl('/restaurante/crear')
        } else {
          this.getRestaurant(response.id);
        } 
      }, 
      error => {
        console.log(error);
      }
    )
  }

  getRestaurant(id: number){
    this.generalService.getRestaurantData(id).subscribe(
      response => {
        this.myres = response; 
        console.log(response.restaurant_name);
        this.restForm.patchValue({
          restaurant_name: response.restaurant_name,
          ubication: response.ubication,
        });
      }, 
      error => {
        console.log(error);
      }
    )
  }
  patchRest(values:any){
    console.log(this.restForm.value)
    this.generalService.patchRestaurant(this.restForm.value).subscribe(
      response => {
        console.log("se actualizo restaurante")
        this.router.navigateByUrl('/restaurante')
      }, 
      error => {
        alert("Los datos no estan registrados")
      }
    )
  }

  async openCamera() {
    const picture_data = await this.cameraService.takePicture();
    var pic = (picture_data.picture_url)
    this.restForm.patchValue({
      imageUrl: pic
    });
  }
}
