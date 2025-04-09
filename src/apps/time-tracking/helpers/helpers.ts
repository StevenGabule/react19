import { v4 as uuidv4 } from 'uuid';

interface NewTimerProp {
	id?: string;
	title?: string;
	project?: string;
	elapsed?: number;
}

export const Helper = {
	newTimer: (attrs: NewTimerProp = {}) => {
		const timer = {
			title: attrs.title || 'Timer',
			project: attrs.project || 'Project',
			id: uuidv4(),
			elapsed: 0
		};
		return timer;
	},

	findById: (array: any[], id: string, cb: (el: any) => void) => {
		array.forEach((el) => {
			if(el.id === id) {
				cb(el);
				return;
			}
		});
	},

	renderElapsedString: (elapsed: number, runningSince: any) => {
		let totalElapsed = elapsed;
		if(runningSince) {
			totalElapsed += Date.now() - runningSince;
		}
		return millisecondsToHuman(totalElapsed);
	}
}

function millisecondsToHuman(ms: number) {
	const seconds = Math.floor((ms / 1000) % 60);
	const minutes = Math.floor((ms / 1000 / 60) % 60);
	const hours = Math.floor(ms / 1000 / 60 / 60);
	const humanized = [
		pad(hours.toString(), 2),
		pad(minutes.toString(), 2),
		pad(seconds.toString(), 2)
	].join(':');

	return humanized;
}

function pad(numberString: string, size: number) {
	let padded = numberString;
	while(padded.length < size) padded = `0${padded}`;
	return padded;
}
