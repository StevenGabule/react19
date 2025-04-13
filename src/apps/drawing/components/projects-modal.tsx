import { useSelector } from 'react-redux'
import { projectsListSelector } from '../modules/projects-list/selectors'
import { useEffect } from 'react'
import { getProjectsList } from '../modules/projects-list/get-projects-list'
import { loadProject } from '../modules/strokes/load-project'
import { hide } from '../modules/modals/slice'
import { useAppDispatch } from './app-dispatch'

export const ProjectsModal = () => {
	const dispatch = useAppDispatch()
	const projectsList = useSelector(projectsListSelector)

	useEffect(() => {
		dispatch(getProjectsList());
	}, [])

	const onLoadProject = (projectId: string) => {
		dispatch(loadProject(projectId));
		dispatch(hide());
	}

	return (
		<div className="window modal-panel">
			<div className="title-bar">
				<div className="title-bar-text">Counter</div>
				<div className="title-bar-controls">
					<button aria-label='Close' onClick={() => dispatch(hide())} />
				</div>
			</div>
			<div className="projects-container">
				{(projectsList.projects || []).map((project) => (
					<div key={project.id} onClick={() => onLoadProject(project.id)} className='project-card'>
						<img src={project.image} alt="thumbnail" />
						<div>{project.name}</div>
					</div>
				))}
			</div>
		</div>
	)
}