import { Injectable } from '@angular/core';
import { PageLayoutHandler } from '@spartacus/storefront';
import { Observable, combineLatest } from 'rxjs';
import { ActiveCartService } from '@spartacus/core';
import { map, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
export class MiniCartPageLayoutHandler implements PageLayoutHandler {

    constructor(protected activeCartService: ActiveCartService) {}

    handle(slots$: Observable<string[]>, pageTemplate?: string, section?: string) {
        if (section === 'header') {
            return combineLatest([
                slots$,
                this.activeCartService.getActive(),
              ]).pipe(
                map(([slots, cart]) => {
                  if (!cart.totalItems) {
                    return slots.filter(slot => slot !== 'MiniCart');
                  } else {
                      return slots;
                  }
                })
              );
        }
        return slots$;
    }
}
