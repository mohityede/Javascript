import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerSeviceWorker'
import 'bootstrap/dist/css/bootstrap.css';
// import Counter2 from './components/counter2';
import Navbar from './components/navbar';
import 'font-awesome/css/font-awesome.css';
import Movies from './components/movies';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Rentals from './components/rentals';
import Costomers from './components/costomers';
import PageNotFound from './components/common/notFound';
import MovieForm from './components/movieForm';


ReactDOM.render(
  <BrowserRouter>

      <main className="container">
      <Navbar />
        <Switch>
          <Route path="/movie/:id" component={MovieForm} />
          <Route path="/costomers" component={Costomers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={PageNotFound} />
          <Route path="/movies" exact component={Movies} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
    </main>

  </BrowserRouter>,
  document.getElementById('root')
);

// registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();