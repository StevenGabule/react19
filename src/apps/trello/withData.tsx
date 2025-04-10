import React from 'react';
import { AppState as TaskAppState } from './states/actions/AppState';
import { load } from './services/api';

export const withData = (WrappedComponent: React.ComponentType<React.PropsWithChildren<{initialState: TaskAppState}>>) => {
	return ({children} : React.PropsWithChildren<{}>) => {
		const [isLoading, setIsLoading] = React.useState(true)
		const [error, setError] = React.useState<Error | undefined>()
		const [initialState, setInitialState] = React.useState<TaskAppState>({lists: [], draggedItem: undefined})

		React.useEffect(() => {
			const fetchInitialState = async () => {
				try {
					const data = await load();
					setInitialState(data);
				} catch (err) {
					if(err instanceof Error) {
						setError(err)
				 	} else {
						console.error("Unexpected error type:", err);
						setError(new Error("An unexpected error occurred")); // Fallback error
					}
				} finally {
					setIsLoading(false);
				}
			}

			fetchInitialState();
		}, []);

		if (isLoading) {
			return <div>Loading...</div>;
		}

		if (error) {
			return <div>Error: {error.message}</div>;
		}

		return (
			<WrappedComponent initialState={initialState}>
				{children}
			</WrappedComponent>
		)
	}
}