import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactExerciseModule } from '../contact-exercise/contact-exercise.module';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { ContactExerciseComponent } from '../contact-exercise/contact-exercise.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactExerciseModule,
    RouterModule.forChild([
      { path: 'contact', canActivate: [CmsPageGuard], component: ContactExerciseComponent, }
    ]),
  ],
})
export class RoutingExerciseModule { }
