import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-lastname-from-field',
  templateUrl: './lastname-from-field.component.html',
  styleUrls: ['./lastname-from-field.component.scss']
})
export class LastnameFromFieldComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  get lastNameControl() {
    return this.parentFormGroup.get('last_name');
  }
}
