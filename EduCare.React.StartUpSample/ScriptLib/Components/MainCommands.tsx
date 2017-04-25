import * as React from "react"

export default class MainCommands extends React.Component<any, any>{
    render() {
        return (
            <div id="commandContent">
                <div className="commands">
                    <ul>
                        <li>
                            <div className="commands">
                                <div className="commandIcon">
                                    <span></span>
                                </div>
                                <div className="commandText" ></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


