import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class RequestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = "eyJhbGciOiJSUzUxMiJ9.cG9zdGdsb2JhbA.Afmj6V_RGvSF2jv4wgsywfZue-ZnF9pCG_6L8DF2_Pbt7bOIMMk4dYrqFc_Em1b1GeSPEkFR_owmb23W6qPtW5O0xfyMEOzn3EqAJPNFlmK5xknwcO13PV-YakKqzI9t7D8Rh6xOPTBLGwcuA9DHa5369ClUwu7KK0glLUQonEgUxBodR7VcvdT1T_xK1LiW_h-Y4Jv0Vhwhgxgt2jhnecpahfxekFvcfM9rKC6-5Za5ypXGmQf4F00ME76s44BFqvSbbFdiAebr6uRCWb8Ixgs8O8Vyy7obKdq0z1oxpbEOccAyCwcMofeJ0RB2KS913raEtyWrvGzsS0A4zuSNxA";

    if(token) {
      request = request.clone({
        setHeaders: {
          "tazzy-secret": token
        }
      })
    }
    return next.handle(request);
  }
}
