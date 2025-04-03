import React, { useActionState } from 'react';

type FormState = { error: string | null };

async function updateNameAction(_: FormState, formData: FormData) {
	const newName = formData.get('name') as string;
	const api = {
		updateName: async (name: string) => console.log(name)
	}
	try {
		await api.updateName(newName);
		return { error: null }
	} catch (error) {
		return { error: 'Failed to update name.' }
	}
}

export default function NameForm() {
	const [state, submitAction] = useActionState(updateNameAction, { error: null })
	return (
		<form action={submitAction}>
			<input type="text" name="name" />
			<button type='submit'>Update Name</button>
			{state.error && <p>{state.error}</p>}
		</form>
	)
}