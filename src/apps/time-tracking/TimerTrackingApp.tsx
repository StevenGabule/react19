import React from 'react';
import { createTimer, deleteTimer, getTimers, startTimer, stopTimer, updateTimer } from './utils/client';
import './semantic-dist/semantic.css';
import EditableTimerList from './components/EditableTimerList';
import { Helper } from './helpers/helpers';
import ToggleableTimerForm from './components/ToggleableTimerForm';

export default function TimerTrackingApp() {
	const [timers, setTimers] = React.useState([])

	React.useEffect(() => {
		loadTimersFromServer();
		setInterval(loadTimersFromServer, 5000);
	}, [])

	const loadTimersFromServer = () => {
		getTimers((serverTimers: any) => (setTimers(serverTimers)));
	}

	const handleCreateFormSubmit = (timer: any) => {
		const t = Helper.newTimer(timer) as any;
		setTimers(timers.concat(t))
		createTimer(timer);
	}

	const handleEditFormSubmit = (attrs: any) => {
		const updateTimers: any = timers.map((timer: any) => {
			if (timer.id === attrs.id) {
				return Object.assign({}, timer, {
					title: attrs.title,
					project: attrs.project
				})
			} else {
				return timer;
			}
		});

		setTimers(updateTimers);

		updateTimer(attrs);
	}

	const handleTrashClick = (timerId: string) => {
		const updateTimer = timers.filter((timer: any) => timer.id !== timerId);

		setTimers(updateTimer);

		deleteTimer({ id: timerId });
	}

	const handleStartClick = (timerId: string) => {
		const now = Date.now();

		const startNewTimer: any = timers.map((timer: any) => {
			if (timer.id === timerId) {
				return Object.assign({}, timer, { runningSince: now })
			} else {
				return timer;
			}
		})

		setTimers(startNewTimer)

		startTimer({ id: timerId, start: now });
	}

	const handleStopClick = (timerId: string) => {
		const now = Date.now();
		const stopTimers: any = timers.map((timer: any) => {
			if (timer.id === timerId) {
				const lastElapsed = now - timer.runningSince;
				return Object.assign({}, timer, {
					elapsed: timer.elapsed + lastElapsed,
					runningSince: null
				})
			} else {
				return timer;
			}
		})

		setTimers(stopTimers);

		stopTimer({ id: timerId, stop: now });
	}

	return (
		<div id="main" className='main ui'>
			<h1 className="ui dividing centered header">Timers</h1>
			<div className="ui three column centered grid">
				<div className="column">
					<EditableTimerList
						timers={timers}
						onFormSubmit={handleEditFormSubmit}
						onTrashClick={handleTrashClick}
						onStartClick={handleStartClick}
						onStopClick={handleStopClick}
					/>
					<ToggleableTimerForm
						onFormSubmit={handleCreateFormSubmit}
					/>
				</div>
			</div>
		</div>
	)
}