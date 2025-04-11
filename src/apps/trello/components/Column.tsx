import React from 'react';
import { useTasksAppState } from '../states/context/AppStateContext';
import { useDrop } from 'react-dnd';
import { DragItem } from '../states/actions/DragItem';
import { TaskActionType } from '../states/action-types';
import { useItemDrag } from '../hooks/useItemDrag';
import { ColumnContainer, ColumnTitle } from '../styles/styles';
import { isHidden } from '../utils/isHidden';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';

interface ColumnProps {
	id: string;
	index: number;
	text: string;
	isPreview?: boolean;
}

export const Column = ({ id, index, text, isPreview }: ColumnProps) => {
	const { state, dispatch } = useTasksAppState();
	const ref = React.useRef<HTMLDivElement>(null);
	const [, drop] = useDrop({
		accept: ['COLUMN', 'CARD'],
		hover(item: DragItem) {
			if (item.type === "COLUMN") {
				const dragIndex = item.index;
				const hoverIndex = index;

				if (dragIndex === hoverIndex) {
					return;
				}

				dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } });
				item.index = hoverIndex;
			} else {
				const dragIndex = item.index;
				const hoverIndex = 0;
				const sourceColumn = item.columnId;
				const targetColumn = id;

				if (sourceColumn === targetColumn) return;

				dispatch({
					type: "MOVE_TASK", 
					payload: {
						dragIndex, hoverIndex, sourceColumn, targetColumn
					}
				})

				item.index = hoverIndex;
				item.columnId = targetColumn;
			}
		}
	})

	const { drag } = useItemDrag({ type: "COLUMN", id, index, text });

	drag(drop(ref));

	return (
		<ColumnContainer
			isPreview={isPreview}
			ref={ref}
			isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}
		>
			<ColumnTitle>{text}</ColumnTitle>
			{state.lists[index].tasks.map((task, i) => (
				<Card
					key={task.id}
					id={task.id}
					text={task.text}
					index={i}
					columnId={task.id}
				/>
			))}
			<AddNewItem
				toggleButtonText='+ Add another card'
				onAdd={(text) => {
					dispatch({ type: TaskActionType.ADD_TASK, payload: { text, listId: id } })
				}}
				dark
			/>
		</ColumnContainer>
	)
}