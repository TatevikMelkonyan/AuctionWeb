"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReducer = exports.initialProductState = void 0;
var auction_actions_1 = require("../auction/auction.actions");
exports.initialProductState = {
    paginator: { items: null, length: 100, pageIndex: 0, pageSize: 10 },
    searchTerm: null,
    progress: 0,
};
var productReducer = function (state, action) {
    if (state === void 0) { state = exports.initialProductState; }
    switch (action.type) {
        case auction_actions_1.AuctionActionTypes.GetProductsSuccess: {
            return __assign(__assign({}, state), { paginator: __assign(__assign({}, state.paginator), { items: action.payload.items, length: action.payload.length }) });
        }
        case auction_actions_1.AuctionActionTypes.SearchProduct: {
            return __assign(__assign({}, state), { searchTerm: action.payload, paginator: __assign(__assign({}, state.paginator), { pageIndex: 0 }) });
        }
        case auction_actions_1.AuctionActionTypes.ChangePaginator: {
            return __assign(__assign({}, state), { paginator: __assign(__assign({}, state.paginator), { pageIndex: action.payload.pageIndex, pageSize: action.payload.pageSize }) });
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
exports.productReducer = productReducer;
//# sourceMappingURL=product.state.js.map