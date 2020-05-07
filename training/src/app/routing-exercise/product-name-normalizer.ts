import { Converter, Occ, Product } from '@spartacus/core';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductPrettyNameNormalizer implements Converter<Occ.Product, Product> {
    convert(source: Occ.Product, target?: any): any {
        target.prettyName = source.name.replace(/ /g, '-').toLowerCase();
        if (target.prettyName.length > 10) {
            target.prettyName = target.prettyName.substring(0, 10);
        }
        return target;
    }
}
