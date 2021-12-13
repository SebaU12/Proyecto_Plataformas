import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login/:i',
    loadChildren: () => import('./general/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./general/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./general/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./general/restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
