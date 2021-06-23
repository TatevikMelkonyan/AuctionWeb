"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTerm = exports.paginator = void 0;
var store_1 = require("@ngrx/store");
var auction = function (state) { return state.auction; };
exports.paginator = store_1.createSelector(auction, function (state) { return state.paginator; });
exports.searchTerm = store_1.createSelector(auction, function (state) { return state.searchTerm; });
//# sourceMappingURL=auction.selector.js.map