import { Point } from "../../utils/types";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../utils/types";
import { endStroke } from "../shared-actions";

const initialState: RootState["currentStroke"] = { color: "#000", points: [] };

const slice = createSlice({
  name: "currentStroke",
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      state.points = [action.payload];
    },
    updateStroke: (state, action: PayloadAction<Point>) => {
      state.points.push(action.payload);
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});

export const currentStroke = slice.reducer;
export const { beginStroke, setStrokeColor, updateStroke } = slice.actions;
