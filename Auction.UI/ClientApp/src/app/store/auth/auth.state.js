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
exports.authReducer = exports.initialAuthState = void 0;
var auth_actions_1 = require("./auth.actions");
exports.initialAuthState = {
    authData: { userId: 0, role: null, token: null },
};
var authReducer = function (state, action) {
    if (state === void 0) { state = exports.initialAuthState; }
    switch (action.type) {
        case auth_actions_1.AuthActionTypes.LoginSuccess: {
            return __assign(__assign({}, state), { authData: __assign(__assign({}, state.authData), { userId: action.payload.userId, role: action.payload.role, token: action.payload.token }) });
        }
        default:
            return state;
    }
};
exports.authReducer = authReducer;
//# sourceMappingURL=auth.state.js.map