import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../_services/auth.service';
import {User} from '../_models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit() {
    this.authService.logout();
  }

  onSubmit() {
    let email = this.signInForm.get('email').value;
    let password = this.signInForm.get('password').value;
    let user = new User(email, password);
    this.authService.authenticate(user);
  }

}
