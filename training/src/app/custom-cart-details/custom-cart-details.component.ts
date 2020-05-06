import { Component, OnInit } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';

@Component({
  selector: 'app-custom-cart-details',
  templateUrl: './custom-cart-details.component.html',
  styleUrls: ['./custom-cart-details.component.scss']
})
export class CustomCartDetailsComponent implements OnInit {

  cart$ = this.activeCartService.getActive();

  constructor(protected activeCartService: ActiveCartService) { }

  ngOnInit(): void {
  }

}
