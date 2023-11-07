"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function HelloWorld(props) {
    return (0, jsx_runtime_1.jsxs)("h1", { className: "text-red-500", "data-testid": "h1", children: ["Hello ", props.name] });
}
exports.HelloWorld = HelloWorld;
