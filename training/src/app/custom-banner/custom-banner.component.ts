import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { CmsBannerComponent } from '@spartacus/core';

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrls: ['./custom-banner.component.scss']
})
export class CustomBannerComponent implements OnInit {

  constructor(public component: CmsComponentData<CmsBannerComponent>) { }

  ngOnInit(): void {
  }

}
