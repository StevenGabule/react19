import { TasksAppState } from "../states/actions/AppState";

export const taskSave = (payload: TasksAppState) => {
	return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
	.then(response => response.json)
	.catch(console.error)
};

export const tasksLoad = (): Promise<TasksAppState> => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`)
	.then((response) => response.json())
	.catch(console.error)
};
