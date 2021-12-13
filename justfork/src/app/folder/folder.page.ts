import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.redirecTo(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  redirecTo(data: string){
    if(data == "Perfil"){
      window.location.href = window.location.origin + '/perfil';
    } else if(data == "Login"){
      window.location.href = window.location.origin + '/login/1';
    } else if(data == "Home"){
      window.location.href = window.location.origin + '/home';
    } else if(data == "Restaurante"){
      window.location.href = window.location.origin + '/restaurante';
    } else if(data == "Registrarse"){
      window.location.href = window.location.origin + '/login/2';
    }
  }

}
