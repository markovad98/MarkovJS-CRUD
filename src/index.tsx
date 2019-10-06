import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Reducer } from './reducer';

const Store = createStore(function() {});

ReactDOM.render(
	<HashRouter>
		<Provider store={Store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);
