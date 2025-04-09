import React, { useState } from 'react'

interface TimerFormProp {
	id?: string;
	title?: string;
	project?: string;
	onFormClose: () => void;
	onFormSubmit: (id: string, title: string, project: string) => void;
}

const TimerForm: React.FC<TimerFormProp> = ({ id, onFormClose, onFormSubmit, ...otherProps }) => {
	const [title, setTitle] = useState(otherProps.title || '');
	const [project, setProject] = useState(otherProps.project || '');
	const submitText = id ? 'Update' : 'Create';

	const handleSubmit = () => {
		onFormSubmit(id!, title, project);
	}

	return (
		<div className='ui centered card'>
			<div className="content">
				<div className="ui form">
					<div className="field">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							value={title}
							id="title"
							onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div className="field">
						<label htmlFor="project">Project</label>
						<input
							type="text"
							value={project}
							id="project"
							onChange={(e) => setProject(e.target.value)} />
					</div>
					<div className="ui two bottom attached buttons">
						<button className='ui basic blue button' onClick={handleSubmit}>{submitText}</button>
						<button className='ui basic red button' onClick={onFormClose}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TimerForm