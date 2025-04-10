import { useDrag } from 'react-dnd';
import { DragItem } from '../states/actions/DragItem';
import { useTasksAppState } from '../states/context/AppStateContext';
import { TaskActionType } from '../states/action-types';
import { useEffect } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const useItemDrag = (item: DragItem) => {
	const { dispatch } = useTasksAppState();
	const [, drag, preview] = useDrag({
		type: item.type,
		item: () => dispatch({
			type: TaskActionType.SET_DRAGGED_ITEM,
			payload: item
		}),
		end: () => dispatch({ type: TaskActionType.SET_DRAGGED_ITEM, payload: undefined })
	})

	useEffect(() => {
		preview(getEmptyImage(), { captureDraggingState: true })
	}, [preview])

	return { drag };
}