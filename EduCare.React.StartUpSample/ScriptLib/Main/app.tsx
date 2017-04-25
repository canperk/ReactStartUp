import * as React from 'react'
import * as ReactDOM from 'react-dom'
import FooterBar from "../Components/FooterBar"
import HeaderBar from "../Components/HeaderBar"
import Home from "../Pages/Home/Home"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const About = () => (
    <div>
        About Page
    </div>
)

const ShellView = () => (
    <Router>
        <div>
            <HeaderBar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <FooterBar />
        </div>
    </Router>
)

export default class App extends React.Component<any, any>
{
    render() {
        return (
            <div>
                <ShellView /> 
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('mainContent'))