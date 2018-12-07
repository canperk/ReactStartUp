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
var MainCommands = (function (_super) {
    __extends(MainCommands, _super);
    function MainCommands() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainCommands.prototype.render = function () {
        return (React.createElement("div", { id: "commandContent" },
            React.createElement("div", { className: "commands" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("div", { className: "commands" },
                            React.createElement("div", { className: "commandIcon" },
                                React.createElement("span", null)),
                            React.createElement("div", { className: "commandText" })))))));
    };
    return MainCommands;
}(React.Component));
exports.default = MainCommands;
