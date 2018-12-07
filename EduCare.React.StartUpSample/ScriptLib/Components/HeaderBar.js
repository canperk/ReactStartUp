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
var HeaderBar = (function (_super) {
    __extends(HeaderBar, _super);
    function HeaderBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderBar.prototype.render = function () {
        return (React.createElement("div", { id: "header" },
            React.createElement("div", { id: "siteTitle" },
                React.createElement(react_router_dom_1.Link, { to: "/" },
                    React.createElement("span", { className: "fa fa-arrow-circle-o-right" }),
                    React.createElement("h4", null, "EduCare"))),
            React.createElement("div", { id: "titleHeaderArea" },
                React.createElement("div", { id: "titleInTitle" }, "Ana Sayfa")),
            React.createElement("div", { id: "userArea" },
                React.createElement("div", { id: "rightControls" },
                    React.createElement("a", null,
                        React.createElement("span", { className: "fa fa-cog" })),
                    React.createElement("a", null,
                        React.createElement("span", { className: "fa fa-rss" }))),
                React.createElement("div", { id: "siteUser" },
                    React.createElement("a", { id: "userId" },
                        React.createElement("span", { id: "siteUserText" }, "Can PERK"),
                        React.createElement("img", { src: "Images/avatar.png" }))))));
    };
    return HeaderBar;
}(React.Component));
exports.default = HeaderBar;
