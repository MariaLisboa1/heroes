import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import HeroDetails from './pages/HeroDetails';
import EditHero from './pages/EditHero';
import NotFoundPage from './pages/NotFoundPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/heroDetails" component={HeroDetails} />
      <Route path="/editHero" component={EditHero} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
