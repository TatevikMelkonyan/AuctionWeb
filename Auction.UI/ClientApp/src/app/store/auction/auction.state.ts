import { Product } from "../../auction/models/product";
import { IPaginator } from "../../models/paginator.interface";
import { AuctionActions, AuctionActionTypes } from "./auction.actions";


export interface IAuctionState {
  paginator: IPaginator<Product>,
  selectedProduct: Product;
  searchTerm: string,
  sellerPrice: number,
}

export const initialAuctionState: IAuctionState = {
  paginator: { items: null, length: 100, pageIndex: 0, pageSize: 10 },
  selectedProduct: null,
  searchTerm: null,
  sellerPrice: 0,
};



export const auctionReducer = (state = initialAuctionState, action: AuctionActions): IAuctionState => {
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
    case AuctionActionTypes.GetProductSuccess: {
      return {
        ...state,
        selectedProduct: action.payload,
        sellerPrice: action.payload.price,
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
 
    //case AuctionActionTypes.ChangeSellerPrice: {
    //  return {
    //    ...state,
    //    sellerPrice: action.payload,
    //  };
    //}
    default:
      return state;
  }
};
