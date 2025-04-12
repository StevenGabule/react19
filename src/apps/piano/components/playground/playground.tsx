import React from 'react';
import { InstrumentContextProvider } from '../../state/instrument';
import { KeyboardWithInstrument } from '../keyboard/with-instrument';
import { InstrumentSelector } from '../instrument-selector';

export const Playground: React.FC =  () => {
	return (
		<InstrumentContextProvider>
			<div className="playground">
				<KeyboardWithInstrument />
				<InstrumentSelector />
			</div>
		</InstrumentContextProvider>
	)
}