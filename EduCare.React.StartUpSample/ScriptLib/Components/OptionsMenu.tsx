import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'

export default class OptionMenu extends React.Component<any, any>
{
    render() {
        return (
            <div id="optionsMenu" className={this.props.isVisible}>
                <div>
                    <div className="menuHeader">Menu</div>
                    <div className="menuContent"> 
                        <ul>
                            <li><Link to="/">Main Page</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><a>Contact</a></li>
                            <li><a>Archive</a></li>
                            <li><a>Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}