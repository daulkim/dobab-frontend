import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class OAuth2RedirectHandler extends Component {

    getUrlParameter(name) {
        console.log("OAuth2RedirectHandler");
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {        
        const access_token = this.getUrlParameter('access_token');
        const error = this.getUrlParameter('error');

        if(access_token) {
            localStorage.setItem("access_token", access_token);
            return <Redirect to={{
                pathname: "/meal-list",
                state: { from: this.props.location }
            }}/>; 
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: { 
                    from: this.props.location,
                    error: error 
                }
            }}/>; 
        }
    }
}

export default OAuth2RedirectHandler;