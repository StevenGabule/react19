import React from 'react'
import { MidiValue, notes } from '../../domain/note';
import { selectKey } from '../../domain/keyboard';
import { Key } from '../key/Key';
import './style.css';

export interface KeyboardProps {
	loading: boolean;
	play: (note: MidiValue) => Promise<void>;
	stop: (note: MidiValue) => Promise<void>;
}

export const Keyboard: React.FunctionComponent<KeyboardProps> = ({ loading, play, stop }) => {

	return (
		<div className='keyboard'>
			{notes.map(({ midi, type, index, octave }) => {
				const label = selectKey(octave, index);
				return (
					<Key
						key={midi}
						type={type}
						label={label}
						disabled={loading}
						onDown={() => play(midi)}
						onUp={() => stop(midi)}
					/>
				)
			})}
		</div>
	)
}
