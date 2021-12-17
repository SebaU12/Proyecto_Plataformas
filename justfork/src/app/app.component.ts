import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from './general/general.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public admin: string = ""
  public flag: boolean = false; 
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Registrarse', url: '/folder/Registrarse', icon: 'person-add' },
    { title: 'Login', url: '/folder/Login', icon: 'person' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'body' },
    { title: 'Restaurante', url: '/folder/Restaurante', icon: 'restaurant' },
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private generalService: GeneralService,
              ) { }

  ngOnInit() {
  }

}
