import { DragItem } from '../states/actions/DragItem';

export const isHidden = (
	isPreview: boolean | undefined,
	draggedItem: DragItem | undefined,
	itemType: string,
	id: string
): boolean => Boolean (
	!isPreview &&
	draggedItem && 
	draggedItem.type === itemType &&
	draggedItem.id === id
)