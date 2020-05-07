import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactExerciseModule } from '../contact-exercise/contact-exercise.module';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { ContactExerciseComponent } from '../contact-exercise/contact-exercise.component';
import { RoutingConfig, ConfigModule, PRODUCT_NORMALIZER } from '@spartacus/core';
import { ProductPrettyNameNormalizer } from './product-name-normalizer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactExerciseModule,
    RouterModule.forChild([
      { path: 'contact', canActivate: [CmsPageGuard], component: ContactExerciseComponent, }
    ]),
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'oldschool/cameras/:productCode/:prettyName',
              'product/:productCode/:prettyName',
              'product/:productCode/:name'
            ]},
          },
        },
      } as RoutingConfig),
  ],
  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductPrettyNameNormalizer,
      multi: true,
    },
  ],
})
export class RoutingExerciseModule { }
