import { LayoutConfig } from '@spartacus/storefront';

export const bootcampLayoutConfig: LayoutConfig = {

    layoutSlots: {
      ProductDetailsPageTemplate: {
        lg: {
          pageFold: 'UpSelling',
        },
        pageFold: 'Summary',
        slots: [
          'Summary',
          'UpSelling',
          'CrossSelling',
          'SiteLinks',
          'PlaceholderContentSlot',
        ],
      },
    },
};
