import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '@spartacus/storefront';
import { startWith, map, filter } from 'rxjs/operators';
import { MiniCartEntriesService } from './mini-cart-entries.service';

@Component({
  selector: 'app-mini-cart-entries',
  templateUrl: './mini-cart-entries.component.html',
  styleUrls: ['./mini-cart-entries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniCartEntriesComponent implements OnInit {

  iconTypes = ICON_TYPE;

  cart$ = this.activeCartService.getActive();

  numberOfEntries$ = this.activeCartService.getNumEntries();

  total$: Observable<string> = this.activeCartService.getActive().pipe(
    filter((cart: Cart) => !!cart.totalPrice),
    map((cart: Cart) => cart.totalPrice.formattedValue )
  );

  constructor(@Inject(ActiveCartService)protected activeCartService: any) {}

  ngOnInit(): void {
  }
}
