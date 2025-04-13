import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../utils/types';

type ProjectsListState = {
	error: string | null;
	pending: boolean;
	projects: Project[]
}

const initialState: ProjectsListState = {
	error: null,
	pending: true,
	projects: []
}

const slice = createSlice({
	name: 'projectsList',
	initialState,
	reducers: {
		getProjectsListSuccess: (s, a: PayloadAction<Project[]>) => {
			s.error = null;
			s.pending = false;
			s.projects = a.payload;
		},
		getProjectsListFailed: (s, a: PayloadAction<string>) => {
			s.error = a.payload;
			s.pending = false;
			s.projects = [];
		},
	}
})

export const projectsList = slice.reducer;
export const {getProjectsListSuccess, getProjectsListFailed} = slice.actions;