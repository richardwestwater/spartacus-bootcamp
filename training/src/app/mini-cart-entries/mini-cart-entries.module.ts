import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCartEntriesComponent } from './mini-cart-entries.component';
import { ConfigModule, CmsConfig, ActiveCartService, UrlModule, I18nModule } from '@spartacus/core';
import { MiniCartEntriesService } from './mini-cart-entries.service';
import { RouterModule } from '@angular/router';
import { IconModule } from '@spartacus/storefront';



@NgModule({
  declarations: [MiniCartEntriesComponent],
  imports: [
    CommonModule, RouterModule, UrlModule, IconModule, I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: MiniCartEntriesComponent,
        }
      }
    } as CmsConfig )
  ],
  exports: [MiniCartEntriesComponent],
  entryComponents: [MiniCartEntriesComponent],
  providers: [
    {
      provide: ActiveCartService,
      useClass: MiniCartEntriesService,
    },
  ]
})
export class MiniCartEntriesModule { }
