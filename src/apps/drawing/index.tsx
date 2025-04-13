import { CanvasProvider } from './canvas-context';
import React from 'react'
import { store } from './store'
import DrawingApp from './app';
import { Provider } from 'react-redux';
import './style.css';

const Drawing: React.FC = () => {
	return (
		<div>
			<Provider store={store}>
				<CanvasProvider>
					<DrawingApp />
				</CanvasProvider>
			</Provider>
		</div>
	)
}

export default Drawing