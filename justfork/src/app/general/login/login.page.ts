import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from '../general.service';
import { CookieService } from "ngx-cookie-service";
import { Storage } from '@ionic/storage-angular'; 
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public log: string;
  public show: boolean;
  public userForm: FormGroup;
  public userlogForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private generalService: GeneralService,
              private router: Router, 
              private cookieService: CookieService,
              private storage: Storage,
              private formBuilder: FormBuilder) { 
                this.userForm = this.formBuilder.group({
                  user_name: [''],
                  user_lname: [''],
                  email: [''],
                  password: [''],
                  ubication: ['']
                });
                this.userlogForm = this.formBuilder.group({
                  email: [''],
                  password: ['']
                });
              }

  ngOnInit() {
    if(this.activatedRoute.snapshot.paramMap.get('i') == "1"){
      this.log = "Login";
      this.show = true;
    } else {
      this.log = "Register"; 
      this.show = false;
    }
  }

  addUser(values:any){
    console.log(values); 
    this.generalService.postAdmin(this.userForm.value).subscribe(
      response => {
        alert("Usuario creado con exito, por favor has login")
        this.router.navigateByUrl('/login/1')
      }, 
      error => {
        console.log(error); 
      }
    )
  }

  LogUser(values:any){
    this.generalService.loginAdmin(this.userlogForm.value).subscribe(
      response => {
        if(response.token){
          this.generalService.setToken(response.token);
          alert("Usuario logueado")
          this.router.navigateByUrl('/restaurante')
        }
      }, 
      error => {
        alert("Los datos no estan registrados")
      }
    )
  }
}
