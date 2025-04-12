import React from 'react'
import { MidiValue } from '../../domain/note';
import './style.css';

export interface KeyboardProps {
	loading: boolean;
	play: (note: MidiValue) => Promise<void>;
	stop: (note: MidiValue) => Promise<void>;
}

export const Keyboard: React.FunctionComponent<KeyboardProps> = () => {
	return (
		<div>Keyboard</div>
	)
}
