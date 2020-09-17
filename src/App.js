import React from 'react';
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import HomePage from "./components/HomePage/HomePage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import CartPageContainer from "./components/CartPage/CartPageContainer";
import ItemPageContainer from "./components/ItemPage/ItemPageContainer";

function App() {
    return (
        <>
            <HeaderContainer/>
            <div>
                <Switch>
                        <Route exact path='/' render={() => <HomePage/>}/>
                        <Route exact path='/books' render={() => <CatalogPage/>}/>
                        <Route path='/books/:id?' render={(props) => <ItemPageContainer {...props}/>}/>
                        <Route path='/cart' render={(book) => <CartPageContainer {...book}/>}/>
                        <Route path='/settings' render={() => <SettingsPage/>}/>
                </Switch>
            </div>
        </>
    );
}

export default App;




