import React from 'react';
import { useFocus } from '../hooks/useFocus';
import { NewItemButton, NewItemFormContainer, NewItemInput } from '../styles/styles';

interface NewItemFormProps {
	onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
	const [text, setText] = React.useState('')
	const inputRef = useFocus();

	return (
		<NewItemFormContainer>
			<NewItemInput
				ref={inputRef}
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
		</NewItemFormContainer>
	)
}