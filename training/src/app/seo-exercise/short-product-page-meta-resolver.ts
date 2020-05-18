import { Injectable } from '@angular/core';
import { ProductPageMetaResolver, RoutingService, ProductService, TranslationService, PageType, ProductScope, Product } from '@spartacus/core';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShortProductPageMetaResolver extends ProductPageMetaResolver {
    constructor(
        protected routingService: RoutingService,
        protected productService: ProductService,
        protected translation: TranslationService
      ) {
        super(routingService, productService, translation);
        this.pageType = PageType.PRODUCT_PAGE;
      }

      private prod$ = this.routingService.getRouterState().pipe(
        map(state => state.state.params['productCode']),
        filter(code => !!code),
        switchMap(code => this.productService.get(code, ProductScope.DETAILS)),
        filter(Boolean)
      );

  resolveDescription(): Observable<string> {
      return this.prod$.pipe(
      switchMap((p: Product) =>
        this.translation.translate('pageMetaResolver.product.description', {
          description: p.summary.substring(0, 160),
        })
      )
    );
  }
}
