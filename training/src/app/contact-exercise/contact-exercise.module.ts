import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactExerciseComponent } from './contact-exercise.component';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';



@NgModule({
  declarations: [ContactExerciseComponent],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule
  ],
  exports: [ContactExerciseComponent],
})
export class ContactExerciseModule { }
