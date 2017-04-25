import * as React from "react"
import * as ReactDOM from "react-dom"
import MainCommand from "./MainCommands"
import OptionsMenu from "./OptionsMenu"
import NotificationArea from "./NotificationArea"

export default class FooterBar extends React.Component<any, any>{
    state = { menuOpened: false, menuClassName: "" };
    toggleMenu = () => {
        let element = document.querySelector(".menuContent ul") as HTMLElement;
        if (!this.state.menuOpened) {
            this.setState({ "menuOpened": true, menuClassName: "open" });
            setTimeout(function () {
                element.style.borderRight = "1px solid #F9F9F9";
            }, 500);
        }
        else {
            this.setState({ "menuOpened": false, menuClassName: "" });
            element.style.borderRight = "";
        }
    };
    render() {
        return (
            <div id="footer">
                <div style={{ position: "relative", textAlign: "center" }} >
                    <div id="startContainer" onClick={this.toggleMenu}>
                        <a id="startMenu">
                            <span className="fa fa-window-restore"></span>
                            <div className="bigLabel">OPTIONS</div>
                        </a>
                        <div id="startContainerOverlay"></div>
                    </div>
                    <MainCommand />
                    <NotificationArea />
                    <OptionsMenu isVisible={this.state.menuClassName} />
                </div>
            </div>
        );
    }
}