import React, { ReactEventHandler } from 'react';
import { NoteType } from '../../domain/note';
import './style.css';
import clsx from 'clsx';
import { usePressObserver } from '../press-observer';

interface KeyProps {
	type: NoteType;
	label: string;
	disabled?: boolean;
	onUp: ReactEventHandler<HTMLButtonElement>;
	onDown: ReactEventHandler<HTMLButtonElement>;
}

export const Key: React.FunctionComponent<KeyProps>= ({type,label,onUp, onDown, ...rest}) => {
	const pressed = usePressObserver({watchKey: label, onStartPress: onDown, onFinishPress: onUp})
	return (
		<button 
			className={clsx(`key key--${type}`, pressed && 'is-pressed')}
			onMouseDown={onDown}
			onMouseUp={onUp}
			{...rest}>
			{label}
		</button>
	)
}