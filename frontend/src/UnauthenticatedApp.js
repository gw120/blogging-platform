import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageContent from './components/layout/PageContent';

import {
    Homepage,
    Login,
    Register,
    ForgotPassword,
    NotFound,
    Explore
} from './components/pages';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function UnauthenticatedApp() {
    return (
        <Router>
            <Header />
            <PageContent>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/explore">
                        <Explore />
                        <Footer />
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </PageContent>
        </Router>
    );
}
export default UnauthenticatedApp;