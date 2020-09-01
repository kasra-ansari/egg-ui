import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./containers/App";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// import $ from "jquery";

import "./containers/App/Layout/css/bootstrap.min.css"
import "./containers/App/Layout/css/style.css"
import "./containers/App/Layout/css/menu.css"
import "./containers/App/Layout/css/color/color.css"
import "./containers/App/Layout/css/responsive.css"
import "./containers/App/Layout/css/rtl.less";


const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={Store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// ReactGA.initialize('UA-163928774-1');
// ReactGA.pageview(window.location.pathname + window.location.search);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
