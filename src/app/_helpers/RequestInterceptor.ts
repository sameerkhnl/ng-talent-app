import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class RequestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('currentUserToken');

    if(token) {
      request = request.clone({
        setHeaders: {
          'tazzy-secret': token
        }
      })
    }
    return next.handle(request);
  }
}
