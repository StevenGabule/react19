import { TaskActionType } from "../action-types";
import { DragItem } from "./DragItem";

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface TasksAppState {
  draggedItem: DragItem | undefined;
  lists: List[];
}

interface TaskSetDraggedItemAction {
  type: TaskActionType.SET_DRAGGED_ITEM;
  payload: DragItem | undefined;
}

interface TaskAddListAction {
  type: TaskActionType.ADD_LIST;
  payload: string;
}

interface TaskAddTaskAction {
  type: TaskActionType.ADD_TASK;
  payload: { text: string; listId: string };
}

interface TaskMoveListAction {
  type: TaskActionType.MOVE_LIST;
  payload: { dragIndex: number; hoverIndex: number };
}

interface TaskMoveTaskAction {
  type: TaskActionType.MOVE_TASK;
  payload: {
    dragIndex: number;
    hoverIndex: number;
    sourceColumn: string;
    targetColumn: string;
  };
}

export type TaskAction =
  | TaskSetDraggedItemAction
  | TaskAddListAction
  | TaskAddTaskAction
  | TaskMoveListAction
  | TaskMoveTaskAction;

export interface TasksAppStateContextProps {
  state: TasksAppState;
  dispatch: React.Dispatch<TaskAction>;
}