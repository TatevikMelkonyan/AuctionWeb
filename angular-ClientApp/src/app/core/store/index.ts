import { AuthEffects } from './auth/auth.effects';
import { AuctionEffects } from './auction/auction.effects';
import { ProductEffects } from './product/product.effects';

export const effects = [
    AuthEffects,
    AuctionEffects,
    ProductEffects  
];
