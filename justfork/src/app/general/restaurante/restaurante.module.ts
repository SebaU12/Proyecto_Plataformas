import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JWTInterceptorInterceptor } from 'src/app/interceptor/jwtinterceptor.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { RestaurantePageRoutingModule } from './restaurante-routing.module';

import { RestaurantePage } from './restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantePageRoutingModule,
    HttpClientModule
  ],
  declarations: [RestaurantePage],
  exports: [
    FormsModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptorInterceptor,
      multi: true
    }
  ]
})
export class RestaurantePageModule {}
