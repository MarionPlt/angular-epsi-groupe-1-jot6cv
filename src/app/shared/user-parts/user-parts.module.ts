import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormFieldComponent } from './components/email-form-field/email-form-field.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { PasswordFromFieldComponent } from './components/password-from-field/password-from-field.component';
import { FirstnameFromFieldComponent } from './components/firstname-from-field/firstname-from-field.component';
import { LastnameFromFieldComponent } from './components/lastname-from-field/lastname-from-field.component';



@NgModule({
  declarations: [
    EmailFormFieldComponent,
    PasswordFromFieldComponent,
    FirstnameFromFieldComponent,
    LastnameFromFieldComponent
  ],
  exports: [
    EmailFormFieldComponent,
    PasswordFromFieldComponent,
    FirstnameFromFieldComponent,
    LastnameFromFieldComponent

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class UserPartsModule { }
