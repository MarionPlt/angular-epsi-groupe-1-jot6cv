import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-password-from-field',
  templateUrl: './password-from-field.component.html',
  styleUrls: ['./password-from-field.component.scss']
})
export class PasswordFromFieldComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  get passwordControl() {
    return this.parentFormGroup.get('password');
  }
}
