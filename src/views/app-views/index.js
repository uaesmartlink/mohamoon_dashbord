import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/home`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/users`}
          component={lazy(() => import(`./users`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/lawyer-category`}
          component={lazy(() => import(`./lawyer-category`))}
        />
         <Route
          path={`${APP_PREFIX_PATH}/country`}
          component={lazy(() => import(`./country`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/user`}
          component={lazy(() => import(`./user`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/new-lawyer-category/:id/:name/:translation/:description/:descriptionAr`}
          component={lazy(() => import(`./new-lawyer-category`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/new-lawyer-category`}
          component={lazy(() => import(`./new-lawyer-category`))}
        />
         <Route
          path={`${APP_PREFIX_PATH}/new-country/:id/:name/:translation/`}
          component={lazy(() => import(`./new-country`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/new-country`}
          component={lazy(() => import(`./new-country`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/lawyers`}
          component={lazy(() => import(`./lawyers`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/withdra-request`}
          component={lazy(() => import(`./withdraw-request`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/charge`}
          component={lazy(() => import(`./charge`))}
        />
         <Route
          path={`${APP_PREFIX_PATH}/transaction`}
          component={lazy(() => import(`./transaction`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/settings`}
          component={lazy(() => import(`./settings`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/new-image-carousel`}
          component={lazy(() => import(`./new-image-carousel`))}
        />
        {/*APPROUTE*/}
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
