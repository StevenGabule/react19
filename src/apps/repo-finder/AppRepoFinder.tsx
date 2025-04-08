import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import RepositoriesList from './components/RepositoriesList';

const AppRepoFinder = () => {
	return (
		<Provider store={store}>
			<div>
				<h1>Search for NPM Repositories</h1>
				<RepositoriesList />
			</div>
		</Provider>
	)
}

export default AppRepoFinder;
