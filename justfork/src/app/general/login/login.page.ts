import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public log: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.paramMap.get('i') == "1"){
      this.log = "Login";
    } else {
      this.log = "Register"; 
    }
  }

}
