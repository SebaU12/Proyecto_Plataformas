import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../general.service';
import { CameraService } from '../../camera.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  public restForm: FormGroup;

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
        if(response.id != 0){
          alert("Ya tiene un restaurante a su nombre")
          this.router.navigateByUrl('/restaurante/crear')
        } 
        console.log(response.id)
      }, 
      error => {
        console.log(error);
      }
    )
  }

  addRest(values:any){
    this.generalService.postRestaurant(this.restForm.value).subscribe(
      response => {
        alert("Se creo el restaurante, logueate de nuevo por favor para notar los cambios")
        localStorage.clear();
        this.router.navigateByUrl('/login/1')
        console.log(response);
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
