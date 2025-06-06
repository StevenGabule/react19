import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = React.useState('');
	const { searchRepositories } = useActions();
	const { data, loading, error } = useTypedSelector((state) => state.repositories);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchRepositories(term);
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
				<button type='submit'>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!error && !loading && data.map(name => <li key={name}>{name}</li>)}
		</div>
	)
}

export default RepositoriesList