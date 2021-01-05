import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanagesMap} exact />
        <Route path="/orphanages/create" component={CreateOrphanage} exact />
        <Route path="/orphanages/:id" component={Orphanage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
