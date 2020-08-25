import React from 'react';
import HeaderContainer from "./components/CatalogPage/Header/HeaderContainer";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import {HashRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
    return (
        <>
            <HashRouter>
                <HeaderContainer/>
                <div>
                    <Switch>
                        <Route path='/' exact component={CatalogPage}/>
                        <Route path='/home' exact component={HomePage}  />
                        {/*<Route path='/about' component={About}/>
                        <Route path='/profile/:name' component={Profile}/>*/}
                    </Switch>
                </div>
            </HashRouter>
        </>
    );
}

export default App;




