import React from 'react';
import { useTasksAppState } from '../states/context/AppStateContext';
import { useItemDrag } from '../hooks/useItemDrag';
import { useDrop } from 'react-dnd';
import { DragItem } from '../states/actions/DragItem';
import { TaskActionType } from '../states/action-types';
import { CardContainer } from '../styles/styles';
import { isHidden } from '../utils/isHidden';

interface CardProps {
	index: number;
	id: string;
	columnId: string;
	text: string;
	isPreview?: boolean
}

export const Card = ({ index, id, columnId, text, isPreview }: CardProps) => {
	const { state, dispatch } = useTasksAppState();
	const ref = React.useRef<HTMLDivElement>(null);
	const { drag } = useItemDrag({ type: 'CARD', id, index, text, columnId })
	const [, drop] = useDrop({
		accept: 'CARD',
		hover(item: DragItem) {
			if (item.type === 'CARD') {
				if (item.id === id) return;

				const dragIndex = item.index;
				const hoverIndex = index;
				const sourceColumn = item.columnId;
				const targetColumn = columnId;

				dispatch({
					type: TaskActionType.MOVE_TASK,
					payload: { dragIndex, hoverIndex, sourceColumn, targetColumn }
				})

				item.index = hoverIndex;
				item.columnId = targetColumn;
			}
		}
	});

	drag(drop(ref));

	return (
		<CardContainer
			isHidden={isHidden(isPreview, state.draggedItem, 'CARD', id)}
			isPreview={isPreview}
			ref={ref}>
			{text}
		</CardContainer>
	)
}