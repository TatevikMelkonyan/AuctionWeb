import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { auctionReducer, IAuctionState, initialAuctionState } from '../auction/auction.state';
import { authReducer, IAuthState, initialAuthState } from '../auth/auth.state';
import { initialProductState, IProductState, productReducer } from '../product/product.state';

export interface IAppState {
  router?: RouterReducerState;
  auth: IAuthState,
  product: IProductState,
  auction: IAuctionState,
}

export const initialAppState: IAppState = {
  auth: initialAuthState,
  product: initialProductState,
  auction: initialAuctionState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
export const appReducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
  auth: authReducer,
  product: productReducer,
  auction: auctionReducer,

};
