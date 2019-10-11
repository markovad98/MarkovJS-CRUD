import React, { createContext } from 'react';
import './app.scss';

import { Switch, Route } from 'react-router-dom';
// Pages
import { HomePage } from '../pages/home-page';
import { AboutPage } from '../pages/about-page';
import NotesPage from '../pages/notes-page';
import NoteDetailsPage from '../pages/note-details-page';
// Layouts
import { Header } from '../layouts/header/header';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
// Reducers
import { notesReducer } from '../reducers/notesReducer';
import { loaderReducer } from '../reducers/loaderReducer';

const rootReducer = combineReducers({
	notes: notesReducer,
	loader: loaderReducer
});

export const store = createStore(rootReducer);

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
							<Route exact path={'/notes/:id'} component={NoteDetailsPage} />
							<Route exact path={'/about'} component={AboutPage} />
						</Switch>
					</div>
				</notesContext.Provider>
			</Provider>
		</React.Fragment>
	);
};
