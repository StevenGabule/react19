/*
	Take note: This is just a exploration and all the code here is not been run or tested.
*/ 
import { use, Suspense } from 'react';

function UserProfile({ userId }) {
	const user = use(fetchData(userId))
	return (
		<div>
			<h2>{user.name}</h2>
			<p>Email: {user.email}</p>
		</div>
	)
}

async function fetchData(userId) {
	const response = await fetch('https://api.example.com/data/' + userId);
	return response.json();
}

function DataComponent() {
	// Directly use the promise with the use hook
	const data = use(fetchData());

	return (
		<div>
			<h1>Data:</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<Suspense>
				<UserProfile userId={data.userId} />
			</Suspense>
		</div>
	)
}

export default DataComponent;