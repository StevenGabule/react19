import React from 'react';
import Soundfont,{ InstrumentName, Player } from 'soundfont-player';
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from '../../domain/sound';
import { Optional } from '../../domain/types';
import { MidiValue } from '../../domain/note';

interface Settings {
	AudioContext: AudioContextType
}

interface Adapted {
	loading: boolean;
	current: Optional<InstrumentName>;

	load(instrument?: InstrumentName) : Promise<void>;
	play(note: MidiValue): Promise<void>;
	stop(note: MidiValue): Promise<void>;
}

export function useSoundfont({AudioContext} : Settings) :Adapted {
	let activeNodes: AudioNodesRegistry = {};
	const [current, setCurrent] = React.useState<Optional<InstrumentName>>(null);
	const [loading, setLoading] = React.useState(false)
	const [player, setPlayer] = React.useState<Optional<Player>>(null);
	const audio = React.useRef(new AudioContext());

	async function resume() {
		return audio.current.state === "suspended" ? await audio.current.resume() : Promise.resolve();
	}

	async function load(instrument: InstrumentName = DEFAULT_INSTRUMENT) {
		setLoading(true);
		const player = await Soundfont.instrument(audio.current, instrument);
		setLoading(false);
		setCurrent(instrument);
		setPlayer(player)
	}

	async function play(note: MidiValue) {
		await resume();
		if(!player) return;

		const node = player.play(note.toString());
		activeNodes = {...activeNodes, [note]: node};
	}

	async function stop(note: MidiValue) {
		await resume();
		if(!activeNodes[note]) return;

		activeNodes[note].stop();
		activeNodes = {...activeNodes, [note]: null};
	}

	return { loading, current, load, play, stop }
}