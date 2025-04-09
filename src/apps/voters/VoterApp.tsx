import './semantic-dist/semantic.css';
import ProductLists from './components/ProductLists';

export default function VoterApp() {
	return (
		<>
			<div className="main ui text container">
				<h1 className="ui dividing centered header">Popular Products</h1>
				<ProductLists />
			</div>
		</>
	)
}