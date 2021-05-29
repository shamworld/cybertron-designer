import React, { ComponentClass, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routeConfig } from '@/router';

import * as styles from './app.module.less';
import Home from '@/views/home';
import Design from '@/views/design';

// const LazyStrawberryIcon = lazy(() => import('./strawberry'));
export const App = (): React.ReactElement => {
  const routerTpl = routeConfig.map((item) => {
    const Cmp: ComponentClass = item.component as ComponentClass;
    return (
      <Route path={item.path} exact>
        <Suspense fallback={'loading...'}>
          <Cmp></Cmp>
        </Suspense>
      </Route>
    );
  });
  return (
    <div className={styles.stylesContainer}>
      <Router>
        <Switch>
          {routerTpl}
        </Switch>
      </Router>
      {/* <Suspense fallback={'loading...'}>
        <LazyStrawberryIcon className={styles.stylesImage} />
      </Suspense> */}
    </div>
  )
};
