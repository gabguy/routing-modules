import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './containers/patient/patient.component';

@NgModule({
  imports: [
    CommonModule,
    PatientRoutingModule
  ],
  declarations: [PatientComponent]
})
export class PatientModule { }
