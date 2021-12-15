import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../general.service';
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
              private router: Router, 
              private formBuilder: FormBuilder) { 
                this.restForm= this.formBuilder.group({
                  restaurant_name: [''],
                  ubication: [''],
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
        console.log("se agrego restaurante")
        console.log(response);
      }, 
      error => {
        alert("Los datos no estan registrados")
      }
    )
  }

}
