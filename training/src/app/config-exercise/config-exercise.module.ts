import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigExerciseComponent } from './config-exercise.component';
import { ConfigModule } from '@spartacus/core';
import { defaultDisplayConfig } from './default-display.config';
import { Level, DisplayConfig } from './display.config';



@NgModule({
  declarations: [ConfigExerciseComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultDisplayConfig),
    ConfigModule.withConfig({
      displayLevel: Level.SCREEN,
    } as DisplayConfig)
  ],
  exports: [ConfigExerciseComponent]
})
export class ConfigExerciseModule { }
