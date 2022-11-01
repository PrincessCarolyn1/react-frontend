import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListTestComponent from './components/ListTestComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTestComponent from './components/CreateTestComponent';
import UpdateTestComponent from './components/UpdateTestComponent';
import ViewTestComponent from './components/ViewTestComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListTestComponent}></Route>
                        <Route path="/employees" component={ListTestComponent}></Route>
                        <Route path="/add-employee/:id" component={CreateTestComponent}></Route>
                        <Route path="/view-employee/:id" component={ViewTestComponent}></Route>
                        {/* <Route path = "/update-employee/:id" component = {UpdateTestComponent}></Route> */}
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>

    );
}

export default App;
