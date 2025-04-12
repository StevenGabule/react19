import React from 'react'
import { DEFAULT_INSTRUMENT } from '../../domain/sound'
import { InstrumentContext } from './context';

export const InstrumentContextProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
	const [instrument, setInstrument] = React.useState(DEFAULT_INSTRUMENT);

	return (
		<InstrumentContext.Provider value={{ instrument, setInstrument }}>
			{children}
		</InstrumentContext.Provider>
	)
}