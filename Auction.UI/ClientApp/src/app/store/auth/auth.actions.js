"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSuccess = exports.Login = exports.AuthActionTypes = void 0;
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Auth] Login";
    AuthActionTypes["LoginSuccess"] = "[Auth] Login Success";
})(AuthActionTypes = exports.AuthActionTypes || (exports.AuthActionTypes = {}));
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
    return Login;
}());
exports.Login = Login;
var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginSuccess;
    }
    return LoginSuccess;
}());
exports.LoginSuccess = LoginSuccess;
//# sourceMappingURL=auth.actions.js.map