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
                        <Route path='/home' exact component={HomePage}  />
                        <Route path='/catalog' exact component={CatalogPage}/>
{/*                        <Route path='/cart' component={Cart}/>
                        <Route path='/profile' component={Profile}/>*/}
                    </Switch>
                </div>
            </HashRouter>
        </>
    );
}

export default App;




