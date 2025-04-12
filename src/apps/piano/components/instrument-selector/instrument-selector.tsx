import React, { ChangeEvent } from 'react';
import { useInstrument } from '../../state/instrument';
import { InstrumentName } from 'soundfont-player';
import { options } from './options';
import './style.css';

export const InstrumentSelector: React.FC = () => {
	const {instrument, setInstrument} = useInstrument()
	const updateValue = ({target} : ChangeEvent<HTMLSelectElement>) => setInstrument(target.value as InstrumentName)

	return (
		<select className="instruments" onChange={updateValue} value={instrument}>
			{options.map(({label, value}) => (
				<option value={value} key={value}>{label}</option>
			))}
		</select>
	)
}