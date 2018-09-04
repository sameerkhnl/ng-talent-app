import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {text} from '@angular/core/src/render3/instructions';
import {User} from '../_models/user.model';

@Injectable()
export class AuthService {
  baseUrl = "http://localhost:8080/login";
  private token: string;

  constructor(private http: HttpClient) {

  }

  authenticate (user: User) {
    const httpOptions = {
      'Content-Type': 'application/json',
      'Accept': 'text/plain',
      responseType: 'text' as 'text'
    }
    this.http.post(this.baseUrl, user, httpOptions).subscribe(x => {
      this.token = x.toString();
      localStorage.setItem('currentUserToken', this.token);
    }, error => console.log("error while fetching access token"))
  }

  logout() {
    localStorage.removeItem('currentUserToken');
  }

  isAuthenticated() {
    return localStorage.getItem('currentUserToken') !== null;

  }

  getAccessToken() {
    return localStorage.getItem('currentUserToken');
  }
}
