import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';    

import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ForgotPassword from './pages/forgotPassword';
import LandingPage from './pages/landingPage';
import RegisterClass from './pages/registerClass';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/recover" exact component={ForgotPassword} />
            <Route path="/landing" exact component={LandingPage} />
            <Route path="/registerClass" exact component={RegisterClass} />
        </BrowserRouter>
    )
}

export default Routes;