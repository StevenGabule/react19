import { AppThunk } from '../../store'
import { Project } from '../../utils/types'
import { fetchProjectsList } from './api'
import { getProjectsListFailed, getProjectsListSuccess } from './slice'

export const getProjectsList = (): AppThunk => async (dispatch) => {
	try {
		const projectsList: Project[] = await fetchProjectsList()
		dispatch(getProjectsListSuccess(projectsList))
	} catch (err) {
		if(err instanceof Error) {
			dispatch(getProjectsListFailed(err.toString()))	
		}
	}
}