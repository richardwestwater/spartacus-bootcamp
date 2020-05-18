import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMetaResolver } from '@spartacus/core';
import { ShortProductPageMetaResolver } from './short-product-page-meta-resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: PageMetaResolver,
      useExisting: ShortProductPageMetaResolver,
      multi: true,
    }
  ]
})
export class SeoExerciseModule { }
