import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { projectsList } from "./modules/projects-list/slice";
import { modalVisible } from "./modules/modals/slice";
import { currentStroke } from "./modules/current-stroke/slice";
import historyIndex from "./modules/history-index/slice";
import strokes from "./modules/strokes/slice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    historyIndex,
    strokes,
    currentStroke,
    modalVisible,
    projectsList,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
