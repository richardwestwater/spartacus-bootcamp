import { Injectable } from '@angular/core';
import { ActiveCartService, StateWithMultiCart,  MultiCartService, Cart, UserIdService } from '@spartacus/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiniCartEntriesService extends ActiveCartService {

  constructor(
    protected store: Store<StateWithMultiCart>
    ,
    protected multiCartService: MultiCartService, userIdService: UserIdService
  ) {
    super(store , multiCartService, userIdService);
  }

  getNumEntries(): Observable<number> {
    return this.getActive().pipe(
      map((cart: Cart) => cart.totalItems)
    );
  }
}
