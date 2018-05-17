import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const SecureRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

export default SecureRoute