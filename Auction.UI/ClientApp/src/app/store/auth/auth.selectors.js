"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authData = void 0;
var store_1 = require("@ngrx/store");
var auth = function (state) { return state.auth; };
exports.authData = store_1.createSelector(auth, function (state) { return state.authData; });
//# sourceMappingURL=auth.selectors.js.map