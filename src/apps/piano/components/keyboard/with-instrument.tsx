import React from 'react';
import { useAudioContext } from '../audio-context-provider';
import { useInstrument } from '../../state/instrument';
import { useSoundfont } from '../../adapters/sound-font';
import { Keyboard } from './Keyboard';
import './style.css';

export const KeyboardWithInstrument: React.FC = () => {
	const AudioContext = useAudioContext()!;
	const { instrument } = useInstrument()
	const { loading, current, play, stop, load } = useSoundfont({ AudioContext });

	React.useEffect(() => {
		if (!loading && instrument !== current) load(instrument)
	}, [load, loading, current, instrument]);

	return (
		<Keyboard
			loading={loading}
			play={play}
			stop={stop}
		/>
	)
}