import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "app/components/loader/";
import lazyWithPreload from "app/utils/lazyWithPreload";

const LandingPage = lazyWithPreload(() => import("../landingPage/"));
const RegisterTemplate = lazyWithPreload(() => import("../registerTemplate/"));
const SearchResultsPage = lazyWithPreload(() =>
  import("../searchResultsPage/")
);

export const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {appRoutes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={!!route.exact}
    render={props => (
      <Suspense fallback={<Loader />}>
        <route.component {...props} {...route} />
      </Suspense>
    )}
  />
);

export const appRoutes = [
  {
    path: "/",
    exact: true,
    component: LandingPage
  },
  {
    path: "/register-template",
    exact: true,
    component: RegisterTemplate
  },
  {
    path: "/search-results",
    exact: true,
    component: SearchResultsPage
  }
];
