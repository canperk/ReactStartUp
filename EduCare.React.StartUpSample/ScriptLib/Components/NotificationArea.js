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
var NotificationArea = (function (_super) {
    __extends(NotificationArea, _super);
    function NotificationArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationArea.prototype.render = function () {
        return (React.createElement("div", { id: "notificationArea" },
            React.createElement("span", { className: "numerator" }, "2"),
            React.createElement("img", { alt: "notifications", src: "/images/jobs.png", style: { marginTop: -5 + "px" } })));
    };
    return NotificationArea;
}(React.Component));
exports.default = NotificationArea;
