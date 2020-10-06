import React from 'react';
import {withRouter, Route, Switch, Redirect} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import HomePage from "./components/HomePage/HomePage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import CartPageContainer from "./components/CartPage/CartPageContainer";
import ItemPageContainer from "./components/ItemPage/ItemPageContainer";
import AuthPage from "./components/AuthPage/Authentication";
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";
import {autoLogin} from "./redux/actions/auth";

class App extends React.Component {
    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        let routes = (
            <Switch>
                <Route exact path='/' render={() => <HomePage/>}/>
                <Route exact path='/books' render={() => <CatalogPage/>}/>
                <Route path='/books/:id?' render={(props) => <ItemPageContainer {...props}/>}/>
                <Route path='/cart' render={(book) => <CartPageContainer {...book}/>}/>
                <Route path='/settings' render={() => <SettingsPage/>}/>
                <Route path='/auth' render={() => <AuthPage/>}/>
                <Redirect to={'/'}/>
            </Switch>
        )
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route exact path='/' render={() => <HomePage/>}/>
                    <Route exact path='/books' render={() => <CatalogPage/>}/>
                    <Route path='/books/:id?' render={(props) => <ItemPageContainer {...props}/>}/>
                    <Route path='/cart' render={(book) => <CartPageContainer {...book}/>}/>
                    <Route path='/settings' render={() => <SettingsPage/>}/>
                    <Route path='/logout' render={() => <Logout/>}/>
                    <Redirect to={'/'}/>
                </Switch>
            )
        }
        return (
            <>
                <HeaderContainer/>
                {routes}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authReducer.token
});

const mapDispatchToProps = (dispatch) => ({
    autoLogin: () => dispatch(autoLogin())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))




