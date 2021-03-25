import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import DetailsMovie from '../containers/DetailsMovie';
import User from '../containers/User';
import Register from '../containers/register';
import WatchList from '../containers/WatchList';
import MoviesByGenre from '../containers/MoviesByGenre';
import NotFound from '../containers/NotFound';

import AppContext from '../context/AppContext';
import Movies from '../utils/Movies';

const App = () => {
  const initMovies = Movies();
  return (
    <AppContext.Provider value={initMovies}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={DetailsMovie} />
            <Route exact path="/user/" component={User} />
            <Route exact path="/register/" component={Register} />
            <Route exact path="/watchlist/" component={WatchList} />
            <Route exact path="/gender/:id" component={MoviesByGenre} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
