import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CookieService} from "ngx-cookie-service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import { Storage } from '@ionic/storage-angular'; 
import { GeneralService } from '../general/general.service' 

@Injectable()
export class JWTInterceptorInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService, 
              private router: Router, 
              private storage: Storage, 
              private generalService: GeneralService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token: string;
    token = this.generalService.getToken(); 
    let req = request;
    if (token) {
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          alert("Si quieres crear o modificar tu restaurante logueate por favor")
          this.router.navigateByUrl('/home')
        }
        return throwError(err);
      })
    );
  }
}
