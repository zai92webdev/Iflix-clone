import React from 'react';
import Search from './Search'
import Home from './Home';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  const PageNotFound = () => (
    <h1>Page not found</h1>
  )

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact={true} />

          <Route path="/search" component={Search} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
