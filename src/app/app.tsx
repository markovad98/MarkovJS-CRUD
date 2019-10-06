import React, { createContext } from 'react';
import './app.scss';
import { Header } from '../layouts/header/header';
import { Switch, Route } from 'react-router-dom';
// Pages
import { MainPage } from '../pages/main';

export const notesContext = createContext({});

export const App = () => {
	return (
		<React.Fragment>
			<notesContext.Provider value={{}}>
				<Header />

				<div className="app-container">
					<Switch>
						<Route exact path={'/'} component={MainPage} />
					</Switch>
				</div>
			</notesContext.Provider>
		</React.Fragment>
	);
};
