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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var axios_1 = __importDefault(require("axios"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
// dotenv.config({ path: path.resolve(__dirname, "../.env") });
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].json());
app.use((0, cors_1["default"])());
app.get("/issues", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].get("".concat(process.env.VITE_JIRA_API_END_POINT, "/search?jql=project=").concat(process.env.VITE_JIRA_PROJECT_KEY), {
                        headers: {
                            Authorization: "Basic ".concat(process.env.VITE_JIRA_API_TOKEN)
                        }
                    })];
            case 1:
                data = (_a.sent()).data;
                return [2 /*return*/, res.json(data)];
            case 2:
                e_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({ error: e_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/issues", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, e_2;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].post("".concat(process.env.VITE_JIRA_API_END_POINT, "/issue"), {
                        fields: __assign(__assign({ project: {
                                key: process.env.VITE_JIRA_PROJECT_KEY
                            } }, req.body), { issuetype: {
                                id: 10002
                            } })
                    }, {
                        headers: {
                            Authorization: "Basic ".concat(process.env.VITE_JIRA_API_TOKEN),
                            "Content-Type": "application/json"
                        }
                    })];
            case 1:
                data = (_e.sent()).data;
                return [2 /*return*/, res.json(data)];
            case 2:
                e_2 = _e.sent();
                console.log("error while creating an issue", (_b = (_a = e_2 === null || e_2 === void 0 ? void 0 : e_2.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errors);
                return [2 /*return*/, res.status(500).json({ error: (_d = (_c = e_2 === null || e_2 === void 0 ? void 0 : e_2.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.errors })];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.listen(process.env.PORT, function () {
    console.log("Server is listening on port" + process.env.PORT);
});
