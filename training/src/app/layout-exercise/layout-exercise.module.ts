import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { bootcampLayoutConfig } from './layout-config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(bootcampLayoutConfig),
  ]
})
export class LayoutExerciseModule { }
