import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import EditHero from './pages/EditHero';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" component={Details} />
      <Route path="/editHero" component={EditHero} />
    </Switch>
  );
}
