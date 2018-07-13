import React from 'react';
import { Switch, Route } from 'react-router-dom';
import map from './components/Map';
import note from './components/Note';
import home from './components/Home';

export default (
    <Switch>
        <Route component={home} path='/' exact />
        <Route component={note} path='/note' />
        <Route component={map} path='/map' />
        
    </Switch>
)