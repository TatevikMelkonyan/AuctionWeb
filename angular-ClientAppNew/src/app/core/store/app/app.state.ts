import { RouterReducerState } from '@ngrx/router-store';
import { IAuthState, initialAuthState } from '../auth/auth.state';
import { IAuctionState, initialAuctionState } from '../auction/auction.state';
import { IProductState, initialProductState } from '../product/product.state';

export interface IAppState {
    router?: RouterReducerState;
    auth: IAuthState,
    auction: IAuctionState,
    product: IProductState;
}

export const initialAppState: IAppState = {
    auth: initialAuthState,
    auction: initialAuctionState,
    product: initialProductState, 
};

export function getInitialState(): IAppState {
    return initialAppState;
}
