import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// Container Redux => Provider 
import {Provider} from 'react-redux';
//Fun Create Store 
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// Reducer Fun AllReducer content All Data For Site . 
import allReducers from './reducers';
// Main App ALL Site Nav, Header, Filter, Data, Footer
import App from './components/App';
// Component About .
import About from './components/About';
// To use Router. 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let store = createStore(allReducers, applyMiddleware(thunk,promise));

ReactDOM.render(    
    <Provider store={store}>
        <Router>
            <Switch>                
                <Route exact path='/' component={App} />                                                                                                                 
                <Route exact path='/about' component={About} /> 
            </Switch>
        </Router>  
  </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
