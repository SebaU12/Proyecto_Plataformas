import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from '../general.service';
import { CookieService } from "ngx-cookie-service";
import { Storage } from '@ionic/storage-angular'; 

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
        console.log(response); 
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
          console.log(response.token)
        }
      }, 
      error => {
        alert("Los datos no estan registrados")
      }
    )
  }
}
