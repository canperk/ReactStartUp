import * as React from "react"
import * as ReactDOM from "react-dom"
import { Link } from "react-router-dom"
export default class HeaderBar extends React.Component<any, any>
{
    render() {
        return (
            <div id="header">
                <div id="siteTitle">
                    <Link to="/">
                        <span className="fa fa-arrow-circle-o-right"></span>
                        <h4>EduCare</h4>
                    </Link>
                </div>
                <div id="titleHeaderArea">
                    <div id="titleInTitle">Ana Sayfa</div>
                </div>
                <div id="userArea">
                    <div id="rightControls">
                        <a><span className="fa fa-cog"></span></a>
                        <a><span className="fa fa-rss"></span></a>
                    </div>
                    <div id="siteUser">
                        <a id="userId">
                            <span id="siteUserText">Can PERK</span>
                            <img src="Images/avatar.png" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}