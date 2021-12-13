import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Registrarse', url: '/folder/Registrarse', icon: 'person-add' },
    { title: 'Login', url: '/folder/Login', icon: 'person' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'body' },
    { title: 'Restaurante', url: '/folder/Restaurante', icon: 'restaurant' },
  ];
  constructor() {}
}
