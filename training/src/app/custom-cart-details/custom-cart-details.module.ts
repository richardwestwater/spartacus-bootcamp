import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartDetailsComponent } from './custom-cart-details.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';



@NgModule({
  declarations: [CustomCartDetailsComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: CustomCartDetailsComponent,
        }
      }
    } as CmsConfig),
  ],
  exports: [CustomCartDetailsComponent],
  entryComponents: [CustomCartDetailsComponent]
})
export class CustomCartDetailsModule { }
