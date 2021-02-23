import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

import AppContext from '../context/AppContext';
import Movies from '../utils/Movies';

const App = () => {
  const initialMovies = Movies();
  return (
    <AppContext.Provider value={initialMovies}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
