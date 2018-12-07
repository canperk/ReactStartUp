"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var OptionMenu = (function (_super) {
    __extends(OptionMenu, _super);
    function OptionMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionMenu.prototype.render = function () {
        return (React.createElement("div", { id: "optionsMenu", className: this.props.isVisible },
            React.createElement("div", null,
                React.createElement("div", { className: "menuHeader" }, "Menu"),
                React.createElement("div", { className: "menuContent" },
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/" }, "Main Page")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/about" }, "About")),
                        React.createElement("li", null,
                            React.createElement("a", null, "Contact")),
                        React.createElement("li", null,
                            React.createElement("a", null, "Archive")),
                        React.createElement("li", null,
                            React.createElement("a", null, "Settings")))))));
    };
    return OptionMenu;
}(React.Component));
exports.default = OptionMenu;
