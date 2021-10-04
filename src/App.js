import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                      <Home></Home>
                    </Route>
                    <Route exact path="/courses">
                      <Courses>

                      </Courses>
                    </Route>
                    <Route exact path="/about">
                      <About></About>
                    </Route>
                    <Route exact path="/reviews">
                      <Reviews></Reviews>
                    </Route>
                    <Route exact path="*">
                      <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
};

export default App;
