"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHelper = void 0;
var http_1 = require("@angular/common/http");
var HttpHelper = /** @class */ (function () {
    function HttpHelper() {
    }
    HttpHelper.getPaginatorParams = function (searchTerm, pageIndex, pageSize) {
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        var params = new http_1.HttpParams();
        if (searchTerm)
            params = params.append('searchTerm', searchTerm);
        params = params.append('pageIndex', pageIndex.toString());
        params = params.append('pageSize', pageSize.toString());
        return params;
    };
    return HttpHelper;
}());
exports.HttpHelper = HttpHelper;
//# sourceMappingURL=http.helper.js.map