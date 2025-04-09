import React, { useState } from 'react'
import TimerForm from './TimerForm';

interface ToggleableTimerFormProps {
	onFormSubmit: (data: any) => void;
}

const ToggleableTimerForm: React.FC<ToggleableTimerFormProps> = ({onFormSubmit}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleFormOpen = () => {
		setIsOpen(true);
	}

	const handleFormClose = () => {
		setIsOpen(false);
	}

	const handleFormSubmit = (timer: any) => {
		onFormSubmit(timer);
		setIsOpen(false);
	}

	if(isOpen) {
		return (
			<TimerForm 
				onFormSubmit={handleFormSubmit}
				onFormClose={handleFormClose}
			/>
		)
	} else {
		return (
			<div className="ui basic content aligned segment">
				<button className="ui basic button icon" onClick={handleFormOpen}>
					<i className="plus icon" />
				</button>
			</div>
		)
	}
}

export default ToggleableTimerForm