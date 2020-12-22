import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../core/entities/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  userForm = this.fb.group(
    {
      email: ['samuel@wecolearn.com', [Validators.required, Validators.email]],
      password: ['admin1234', [Validators.required, Validators.minLength(6)]],
      first_name: [null, [ Validators.required]],
      last_name: [null, [ Validators.required]],
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
  get firstNameControl() {
    return this.userForm.get('first_name');
  }
  get lastNameControl() {
    return this.userForm.get('last_name');
  }
  signup() {
   const newUser = new User (this.userForm.getRawValue());
   this.authService.signup(newUser).subscribe(
    () => {
      // inscription a marché
      this.authService.signin(newUser.email, newUser.password).subscribe(
        () => {
          // la connexion est réussie
          this.router.navigate(['dash/home']);
        },
        () => {
          // une erreur
        }
      );
    },
    (err) => {
      console.log({err});
      // afficher un message pour dire qu'il y a un duplicata'
    });
    }
}

