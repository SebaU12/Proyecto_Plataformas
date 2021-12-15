import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  crear_restaurante: boolean = true;
  menu_id_mod: number;
  editando_menu: boolean = false;

  menus: any[] = [
    {
      id: 1,
      plato: 'si',
      precio: 12.5,
      descripcion: "plato1"
    },
    {
      id: 2,
      plato: 'no',
      precio: 14.12,
      descripcion: 'plato2'
    },
    {
      id: 3,
      plato: 'perhaps',
      precio: 21,
      descripcion: 'plato3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  flipCreateForm(){
    this.crear_restaurante = !this.crear_restaurante;
  }

  fijarIdMenu(val: number){
    this.menu_id_mod = val;
    this.editando_menu = true;
  }

  stopMenuEdit(){
    this.menu_id_mod = null;
    this.editando_menu = false;
  }

}
