import { useFormStatus } from 'react-dom';

function SubmitButton() {
	const {pending} = useFormStatus();
	return (
		<button type="submit" disabled={pending}>
			{pending ? 'Submitting...' : 'Submit'}
		</button>
	);
}

export default function Form() {
	return (
		<form action={console.log}>
			<input type='text' name="username" required />
			<SubmitButton />
		</form>
	)
}