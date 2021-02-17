import React from 'react'
import { Provider } from 'react-redux';
import Header from './components/Header';
import ListadoPaises from './components/ListadoPaises';
import store from './store';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Pais from './components/Pais';
import './sass/styles-dark.scss';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Provider store={store}>
                    <Route path="/" exact component={ListadoPaises} />
                    <Route exact path="/pais" component={Pais} />
                </Provider> 
            </Switch>
        </Router>
    )
}

export default App
