import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';    

import LoginPage from './pages/loginPage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LoginPage} />
        </BrowserRouter>
    )
}

export default Routes;