import React from 'react';
import { TasksAppState, TasksAppStateContextProps } from '../actions/AppState';
import { withTasksData } from '../../withData';
import { TasksAppStateReducer } from '../reducers/taskReducer';
import { taskSave } from '../../services/api';

const TaskAppStateContext = React.createContext<TasksAppStateContextProps>(
  {} as TasksAppStateContextProps
);

export const TaskAppStateProvider = withTasksData(({children, initialState}: React.PropsWithChildren<{initialState: TasksAppState}>) => {
	const [state, dispatch] = React.useReducer(TasksAppStateReducer, initialState)

	React.useEffect(() => {
		taskSave(state);
	}, [state])

	return (
		<TaskAppStateContext.Provider value={{state, dispatch}}>
			{children}
		</TaskAppStateContext.Provider>
	)
})

export const useTasksAppState = () => {
	return React.useContext(TaskAppStateContext);
}