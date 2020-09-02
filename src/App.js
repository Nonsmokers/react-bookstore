import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import {HashRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Settings from "./components/SettingsPage/Settings";
import CartPageContainer from "./components/CartPage/CartPageContainer";

function App() {
    return (
        <>
            <HashRouter>
                <HeaderContainer/>
                <div>
                    <Switch>
                        <Route path='/home' exact render={() => <HomePage/>}/>
                        <Route path='/catalog' render={() => <CatalogPage/>}/>
                        <Route path='/cart' render={() => <CartPageContainer/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </Switch>
                </div>
            </HashRouter>
        </>
    );
}

export default App;




