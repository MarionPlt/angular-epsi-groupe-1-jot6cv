import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import {SessionService} from '../../../core/services/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private sessionService: SessionService) {
    this.authService.signout(); // supprimer le token au moment où on arrive sur signin, on vire les données
  }

  userForm = this.fb.group(
    {
      email: ['samuel@wecolearn.com',  [Validators.required, Validators.email]],
      password: ['admin1234', [Validators.required, Validators.minLength(6)]]
    }
  );

  ngOnInit() {
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  signin() {
    this.authService.signin(
      this.emailControl.value,
      this.passwordControl.value
    ).subscribe((token) => {
      this.router.navigate((['dash/home']));
    });
  }


}
