import * as React from "react"
export default class NotificationArea extends React.Component<any, any>{
    render() {
        return (
            <div id="notificationArea">
                <span className="numerator">2</span>
                <img alt="notifications" src="/images/jobs.png" style={{ marginTop: -5 + "px" }} />
            </div>
        );
    }
}