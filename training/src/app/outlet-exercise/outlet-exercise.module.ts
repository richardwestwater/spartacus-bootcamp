import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletExerciseComponent } from './outlet-exercise.component';
import { OutletRefModule } from '@spartacus/storefront';



@NgModule({
  declarations: [OutletExerciseComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [OutletExerciseComponent]
})
export class OutletExerciseModule { }
