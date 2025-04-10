import { useTasksAppState } from './states/context/AppStateContext'
import { TaskAppContainer } from './styles/styles'
import CustomDragLayer from './components/CustomDragLayer'
import { Column } from './components/Column'
import { AddNewItem } from './components/AddNewItem'
import { TaskActionType } from './states/action-types'

const TrelloBoard = () => {
	const { state, dispatch } = useTasksAppState()

	if (!state || !state.lists) {
		return <div>Loading lists...</div>
	}

	return (
		<TaskAppContainer>
			<CustomDragLayer />
			{state.lists.map((list, i) => (
				<Column id={list.id} text={list.text} key={list.id} index={i} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another list'
				onAdd={text => dispatch({ type: TaskActionType.ADD_LIST, payload: text })}
			/>
		</TaskAppContainer>
	)
}

export default TrelloBoard