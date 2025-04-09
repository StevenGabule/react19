import React from 'react'
import EditableTimer from './EditableTimer';

interface TimerProps {
	id: string;
	title: string;
	project: string;
	elapsed: number;
	runningSince: string;
}

interface EditableTimerListProps {
	timers: TimerProps[];
	onFormSubmit: (data: any) => void;
	onTrashClick: (id: string) => void;
	onStartClick: (id: string) => void;
	onStopClick: (id: string) => void;
}

const EditableTimerList: React.FC<EditableTimerListProps> = (props) => {
	return (
		<div id='timers'>
			{props.timers.map((timer) => (
				<EditableTimer
					key={timer.id}
					{...timer}
					{...props}
				/>
			))}
		</div>
	)
}

export default EditableTimerList