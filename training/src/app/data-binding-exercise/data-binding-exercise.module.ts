import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdapter, PRODUCT_NORMALIZER, ConfigModule, CmsConfig } from '@spartacus/core';
import { BestbuyProductAdapter } from './bestbuy-product-adapter';
import { BestbuyProductNormalizer } from './bestbuy-product-normalizer';
import { ProductVariantsComponent } from '@spartacus/storefront';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductVariantSelectorComponent: {
          component: ProductVariantsComponent,
          guards: [],
        },
      },
    } as CmsConfig)
  ],
  providers: [
    {
      provide: ProductAdapter,
      useExisting: BestbuyProductAdapter,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: BestbuyProductNormalizer,
      multi: true,
    }
  ],
})
export class DataBindingExerciseModule { }
