import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';



@NgModule({
  declarations: [CustomBannerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent
        }
      }
    } as CmsConfig),
    GenericLinkModule,
    MediaModule
  ],
  exports: [CustomBannerComponent],
  entryComponents: [CustomBannerComponent]
})
export class CustomBannerModule { }
