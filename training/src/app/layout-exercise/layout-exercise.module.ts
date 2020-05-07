import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { bootcampLayoutConfig } from './layout-config';
import { PAGE_LAYOUT_HANDLER } from '@spartacus/storefront';
import { MiniCartPageLayoutHandler } from './mini-cart-layout-handler';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(bootcampLayoutConfig),
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: MiniCartPageLayoutHandler,
      multi: true,
    },
  ]
})
export class LayoutExerciseModule { }
