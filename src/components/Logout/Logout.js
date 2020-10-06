import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {logout} from "../../redux/actions/auth";

class Logout extends React.Component {
    componentDidMount() {
        this.props.logout()
    }
    render(){
        return <Redirect to={'/'}/>
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Logout);