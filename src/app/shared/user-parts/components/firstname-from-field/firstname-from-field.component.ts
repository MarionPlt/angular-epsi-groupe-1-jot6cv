import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-firstname-from-field',
  templateUrl: './firstname-from-field.component.html',
  styleUrls: ['./firstname-from-field.component.scss']
})
export class FirstnameFromFieldComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  get firstNameControl() {
    return this.parentFormGroup.get('first_name');
  }
}
