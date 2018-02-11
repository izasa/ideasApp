import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import firebase from 'firebase';
import database from './database';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import NewIdea from './components/NewIdea';
import IdeaList from './components/IdeaList';

import reducers from './reducers';

class App extends Component {

  constructor(props){
    super(props);

  }



  render() {

    const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

    return (
      <div className="App">
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter >
            <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
                <Switch>
                <Route path = "/ideas/new" component={NewIdea} />
                <Route path = "/" component={IdeaList }  />
                </ Switch>
            </div>
        </BrowserRouter>
    </Provider>
       
      </div>
    );
  }
}

export default App;
