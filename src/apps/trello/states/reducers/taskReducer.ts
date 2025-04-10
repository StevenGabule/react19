import React from "react";
import { AppState, TaskAction } from "../actions/AppState";
import { TaskActionType } from '../action-types';
import { nanoid } from 'nanoid';
import { findItemIndexById } from '../../utils/findItemIndexById';
import { moveItem } from '../../utils/moveItem';

export const AppStateReducer = (state: AppState, action: TaskAction): AppState => {
  switch (action.type) {
		case TaskActionType.SET_DRAGGED_ITEM: {
			return {...state, draggedItem: action.payload}
		}
		case TaskActionType.ADD_LIST: {
      return {
        ...state,
        lists: [
          ...state.lists, 
          { id: nanoid(), text: action.payload, tasks: []}
        ]
      }
    }
    case TaskActionType.ADD_TASK: {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.listId
      );
      state.lists[targetLaneIndex].tasks.push({
        id: nanoid(),
        text: action.payload.text
      })
      return {...state};
    }
    case TaskActionType.MOVE_LIST: {
      const {dragIndex, hoverIndex} = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex)
      return {...state};
    }
    case TaskActionType.MOVE_TASK: {
      const {dragIndex, hoverIndex, sourceColumn, targetColumn} = action.payload;
      const sourceLaneIndex = findItemIndexById(state.lists, sourceColumn);
      const targetLaneIndex = findItemIndexById(state.lists, targetColumn);
      const item = state.lists[sourceLaneIndex].tasks.splice(dragIndex, 1)[0];
      state.lists[targetLaneIndex].tasks.splice(hoverIndex, 0, item);
      return {...state};
    }
    default: {
      return state;
    }
  }
};
