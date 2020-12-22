import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/entities/user';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  get user(): User {
    return AuthService.user;
  }

}
