"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appReducers = exports.getInitialState = exports.initialAppState = void 0;
var router_store_1 = require("@ngrx/router-store");
var auction_state_1 = require("../auction/auction.state");
var auth_state_1 = require("../auth/auth.state");
var product_state_1 = require("../product/product.state");
exports.initialAppState = {
    auth: auth_state_1.initialAuthState,
    product: product_state_1.initialProductState,
    auction: auction_state_1.initialAuctionState,
};
function getInitialState() {
    return exports.initialAppState;
}
exports.getInitialState = getInitialState;
exports.appReducers = {
    router: router_store_1.routerReducer,
    auth: auth_state_1.authReducer,
    product: product_state_1.productReducer,
    auction: auction_state_1.auctionReducer,
};
//# sourceMappingURL=app.state.js.map