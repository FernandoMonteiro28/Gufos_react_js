import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './assets/pages/Home/App';

// importou a pagina Categorias
import Categoria from './assets/pages/Categoria/Categoria';
import * as serviceWorker from './serviceWorker';

import Notfound from './assets/pages/Notfound/Notfound';

// importou a biblioteca react-router-dom
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';


// realizar a criaçao das rotas
const Rotas = (
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Categoria" component={Categoria} />
            <Route componet = {Notfound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
