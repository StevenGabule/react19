import React, { useEffect, useReducer } from 'react';
import { AppState, TasksAppStateContextProps } from '../actions/AppState';
import { withData as withTaskData } from '../../withData';
import { AppStateReducer } from '../reducers/taskReducer';
import { save } from '../../services/api';

const AppStateContext = React.createContext<TasksAppStateContextProps>(
  {} as TasksAppStateContextProps
);

export const AppStateProvider = withTaskData(({children, initialState}: React.PropsWithChildren<{initialState: AppState}>) => {
	const [state, dispatch] = useReducer(AppStateReducer, initialState)

	useEffect(() => {
		save(state);
	}, [state])

	return (
		<AppStateContext.Provider value={{state, dispatch}}>
			{children}
		</AppStateContext.Provider>
	)
})