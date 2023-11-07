"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Input() {
    const [name, setName] = (0, react_1.useState)('');
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { "data-testid": "input-result", children: ["Input result : ", name, "!"] }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "input-type", children: "Enter a value" }), (0, jsx_runtime_1.jsx)("input", { id: "input-type", type: "text", value: name, onChange: (e) => setName(e.target.value) })] }));
}
exports.Input = Input;
