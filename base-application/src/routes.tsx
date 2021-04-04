import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRoute = lazy(() => import("micro1/App"));
const App2Route = lazy(() => import("micro1/App2"));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback="carregando...">
      <Switch>
        <Route path="/" exact component={AppRoute} />
        <Route path="/app2" component={App2Route} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
