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
var MainCommands_1 = require("./MainCommands");
var OptionsMenu_1 = require("./OptionsMenu");
var NotificationArea_1 = require("./NotificationArea");
var FooterBar = (function (_super) {
    __extends(FooterBar, _super);
    function FooterBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { menuOpened: false, menuClassName: "" };
        _this.toggleMenu = function () {
            var element = document.querySelector(".menuContent ul");
            if (!_this.state.menuOpened) {
                _this.setState({ "menuOpened": true, menuClassName: "open" });
                setTimeout(function () {
                    element.style.borderRight = "1px solid #F9F9F9";
                }, 500);
            }
            else {
                _this.setState({ "menuOpened": false, menuClassName: "" });
                element.style.borderRight = "";
            }
        };
        return _this;
    }
    FooterBar.prototype.render = function () {
        return (React.createElement("div", { id: "footer" },
            React.createElement("div", { style: { position: "relative", textAlign: "center" } },
                React.createElement("div", { id: "startContainer", onClick: this.toggleMenu },
                    React.createElement("a", { id: "startMenu" },
                        React.createElement("span", { className: "fa fa-window-restore" }),
                        React.createElement("div", { className: "bigLabel" }, "OPTIONS")),
                    React.createElement("div", { id: "startContainerOverlay" })),
                React.createElement(MainCommands_1.default, null),
                React.createElement(NotificationArea_1.default, null),
                React.createElement(OptionsMenu_1.default, { isVisible: this.state.menuClassName }))));
    };
    return FooterBar;
}(React.Component));
exports.default = FooterBar;
