import React, { createContext } from 'react';
import './app.scss';
import { Header } from '../layouts/header/header';
import { Switch, Route } from 'react-router-dom';
// Pages
import { HomePage } from '../pages/home-page';
import { AboutPage } from '../pages/about-page';
import NotesPage from '../pages/notes-page';
import { createStore } from 'redux';
import { notesReducer } from '../reducers/notesReducer';
import { Provider } from 'react-redux';

export const store = createStore(notesReducer);

export const notesContext = createContext({});

export const App = () => {
	return (
		<React.Fragment>
			<Provider store={store}>
				<notesContext.Provider value={{}}>
					<Header />

					<div className="app-container">
						<Switch>
							<Route exact path={'/'} component={HomePage} />
							<Route exact path={'/notes'} component={NotesPage} />
							<Route exact path={'/about'} component={AboutPage} />
						</Switch>
					</div>
				</notesContext.Provider>
			</Provider>
		</React.Fragment>
	);
};
