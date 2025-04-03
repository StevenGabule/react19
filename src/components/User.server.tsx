'use server';

import React from 'react';

interface User {
	id: number;
	name: string;
	email: string;
	address: string;
}

export default async function Users() {
	const res =  await fetch('https://api.example.com/users');
	const users: User[]  = await res.json();

	return (
		<ul>
			{users.map(user => <li key={user.id}>{user.name}</li>)}
		</ul>
	)
}