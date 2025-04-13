import React, { ChangeEvent } from 'react';
import { useCanvas } from '../canvas-context';
import { useAppDispatch } from './app-dispatch'
import { getCanvasImage } from '../utils/canvas-util';
import { getBase64Thumbnail } from '../utils/scaler';
import { saveProjects } from '../modules/strokes/save-project';
import { hide } from '../modules/modals/slice';

export const ProjectSaveModal = () => {
	const dispatch = useAppDispatch();
	const canvasRef = useCanvas();
	const [projectName, setProjectName] = React.useState('')

	const onProjectNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setProjectName(e.target.value)
	}

	const onProjectSave = async() => {
		const file = await getCanvasImage(canvasRef.current);
		if(!file) {
			return;
		}

		const thumbnail = await getBase64Thumbnail({file, scale: 0.1});
		dispatch(saveProjects(projectName, thumbnail));
		setProjectName('')
		dispatch(hide())
	}

	return (
		<div className='window modal-panel'>
			<div className="title-bar">
				<div className="title-bar-text">Save</div>
			</div>
			<div className="window-body">
				<div className="field-row-stacked">
					<label htmlFor="projectName">Project Name</label>
					<input type="text" id='projectName' onChange={onProjectNameChange} />
				</div>
				<div className="field-row">
					<button onClick={onProjectSave}>Save</button>
					<button onClick={() => dispatch(hide())}>Cancel</button>
				</div>
			</div>
		</div>
	)

}