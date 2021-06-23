"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitProductSuccess = exports.SubmitProduct = exports.GetProductSuccess = exports.GetProduct = exports.ChangePaginator = exports.SearchProduct = exports.GetProductsSuccess = exports.GetProducts = exports.AuctionActionTypes = void 0;
var AuctionActionTypes;
(function (AuctionActionTypes) {
    AuctionActionTypes["GetProducts"] = "[Auction] Get Products";
    AuctionActionTypes["GetProductsSuccess"] = "[Auction] Get Products Success";
    AuctionActionTypes["SearchProduct"] = "[Auction] Search Product";
    AuctionActionTypes["ChangePaginator"] = "[Auction] Change Paginator";
    AuctionActionTypes["GetProduct"] = "[Auction] Get Product";
    AuctionActionTypes["GetProductSuccess"] = "[Auction] Get Product Success";
    AuctionActionTypes["SubmitProduct"] = "[Product] Submit Product";
    AuctionActionTypes["SubmitProductSuccess"] = "[Auction] Submit Product Success";
})(AuctionActionTypes = exports.AuctionActionTypes || (exports.AuctionActionTypes = {}));
var GetProducts = /** @class */ (function () {
    function GetProducts() {
        this.type = AuctionActionTypes.GetProducts;
    }
    return GetProducts;
}());
exports.GetProducts = GetProducts;
var GetProductsSuccess = /** @class */ (function () {
    function GetProductsSuccess(payload) {
        this.payload = payload;
        this.type = AuctionActionTypes.GetProductsSuccess;
    }
    return GetProductsSuccess;
}());
exports.GetProductsSuccess = GetProductsSuccess;
var SearchProduct = /** @class */ (function () {
    function SearchProduct(payload) {
        this.payload = payload;
        this.type = AuctionActionTypes.SearchProduct;
    }
    return SearchProduct;
}());
exports.SearchProduct = SearchProduct;
var ChangePaginator = /** @class */ (function () {
    function ChangePaginator(payload) {
        this.payload = payload;
        this.type = AuctionActionTypes.ChangePaginator;
    }
    return ChangePaginator;
}());
exports.ChangePaginator = ChangePaginator;
var GetProduct = /** @class */ (function () {
    function GetProduct(payload) {
        this.payload = payload;
        this.type = AuctionActionTypes.GetProduct;
    }
    return GetProduct;
}());
exports.GetProduct = GetProduct;
var GetProductSuccess = /** @class */ (function () {
    function GetProductSuccess(payload) {
        this.payload = payload;
        this.type = AuctionActionTypes.GetProductSuccess;
    }
    return GetProductSuccess;
}());
exports.GetProductSuccess = GetProductSuccess;
var SubmitProduct = /** @class */ (function () {
    function SubmitProduct(payload) {
        this.payload = payload;
        this.type = AuctionActionTypes.SubmitProduct;
    }
    return SubmitProduct;
}());
exports.SubmitProduct = SubmitProduct;
var SubmitProductSuccess = /** @class */ (function () {
    function SubmitProductSuccess(payload) {
        this.payload = payload;
        this.type = AuctionActionTypes.SubmitProductSuccess;
    }
    return SubmitProductSuccess;
}());
exports.SubmitProductSuccess = SubmitProductSuccess;
//# sourceMappingURL=auction.actions.js.map