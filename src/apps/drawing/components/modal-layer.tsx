import { useSelector } from 'react-redux'
import { modalNameSelector } from '../modules/modals/selectors'
import { ProjectsModal } from './projects-modal';
import { ProjectSaveModal } from './project-save-modal';

export const ModalLayer = () => {
	const modalName = useSelector(modalNameSelector);

	switch (modalName) {
		case 'PROJECTS_MODAL':
			return <ProjectsModal />
		case 'PROJECTS_SAVE_MODAL':
			return <ProjectSaveModal />
		default:
			return null;
	}
}