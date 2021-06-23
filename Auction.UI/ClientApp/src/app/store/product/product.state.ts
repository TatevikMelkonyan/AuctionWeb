import { Product } from '../../auction/models/product';
import { IPaginator } from '../../models/paginator.interface';
import { AuctionActions, AuctionActionTypes } from '../auction/auction.actions';

export interface IProductState {
  paginator: IPaginator<Product>,
  searchTerm: string,
  progress: number,
}

export const initialProductState: IProductState = {
  paginator: { items: null, length: 100, pageIndex: 0, pageSize: 10 },
  searchTerm: null,
  progress: 0,
};


export const productReducer = (state = initialProductState, action: AuctionActions): IProductState => {
  switch (action.type) {
    case AuctionActionTypes.GetProductsSuccess: {
      return {
        ...state,
        paginator: {
          ...state.paginator,
          items: action.payload.items,
          length: action.payload.length,
        },
      };
    }
    case AuctionActionTypes.SearchProduct: {
      return {
        ...state,
        searchTerm: action.payload,
        paginator: {
          ...state.paginator,
          pageIndex: 0,
        },
      };
    }
    case AuctionActionTypes.ChangePaginator: {
      return {
        ...state,
        paginator: {
          ...state.paginator,
          pageIndex: action.payload.pageIndex,
          pageSize: action.payload.pageSize,
        },
      };
    }
    //case AuctionActionTypes.SubmitProductSuccess: {
    //  return {
    //    ...state,
    //    progress: 0,
    //  };
    //}
    default:
      return state;
  }
};
