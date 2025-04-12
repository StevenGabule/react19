import { FunctionComponent } from 'react';
import { useAudioContext } from '../audio-context-provider';
import { Playground } from '../playground';
import { NoAudioMessage } from '../no-audio-message/no-audio-message';

export const Main: FunctionComponent = () => {
	const AudioContext = useAudioContext();
	return !!AudioContext ? <Playground /> : <NoAudioMessage />
}