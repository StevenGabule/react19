import { TaskAppStateProvider } from './states/context/AppStateContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TrelloBoard from './TrelloBoard'
import './styles/style.css';

const TrelloApp = () => {
	return (
		<DndProvider backend={HTML5Backend}>
			<TaskAppStateProvider>
				<TrelloBoard />
			</TaskAppStateProvider>
		</DndProvider>
	)
}

export default TrelloApp