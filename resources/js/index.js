import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Show from './components/show';
import Edit from './components/edit';

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    
                    <Route exact path="/users" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/users/show" component={Show} />
                    <Route path="/users/edit" component={Edit} />
                    
                </Switch>
            </div>
        </BrowserRouter>,

        document.getElementById('root')
    );
}