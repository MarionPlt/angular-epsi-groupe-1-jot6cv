import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

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
      // console.log('token récupéré', token);
    });
  }


}
