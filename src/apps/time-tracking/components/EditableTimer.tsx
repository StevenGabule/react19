import React from 'react'
import TimerForm from './TimerForm';
import Timer from './Timer';

interface EditableTimerProp {
	id: string;
	title: string;
	project: string;
	elapsed: number;
	runningSince: string;
	onFormSubmit: (data: any) => void;
	onTrashClick: (id: string) => void;
	onStartClick: (id: string) => void;
	onStopClick: (id: string) => void;
}

const EditableTimer: React.FC<EditableTimerProp> = ({ id, title, project, elapsed, runningSince, onFormSubmit, ...otherProps }) => {
	const [editFormOpen, setEditFormOpen] = React.useState(false);

	const openForm = () => {
		setEditFormOpen(true);
	}

	const closeForm = () => {
		setEditFormOpen(false);
	}

	const handleEditClick = () => {
		openForm();
	}

	const handleFormClose = () => {
		closeForm();
	}

	const handleSubmit = (timer: any) => {
		onFormSubmit(timer);
		closeForm();
	}

	if (editFormOpen) {
		return <TimerForm
			id={id}
			title={title}
			project={project}
			onFormClose={handleFormClose}
			onFormSubmit={handleSubmit}
		/>
	} else {
		return (
			<Timer
				id={id}
				title={title}
				project={project}
				elapsed={elapsed}
				runningSince={runningSince}
				onEditClick={handleEditClick}
				onTrashClick={otherProps.onTrashClick}
				onStartClick={otherProps.onStartClick}
				onStopClick={otherProps.onStopClick}
			/>
		)
	}

}

export default EditableTimer