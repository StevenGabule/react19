import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { projectsList } from './modules/projects-list/slice';
import { modalVisible } from './modules/modals/slice';
import { currentStroke } from './modules/current-stroke/slice';
import historyIndex from './modules/history-index/slice';
import strokes from './modules/strokes/slice';
import logger from 'redux-logger'
import { RootState } from './utils/types';

export const store = configureStore({
	reducer: {
		historyIndex,
		strokes,
		currentStroke,
		modalVisible,
		projectsList
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

