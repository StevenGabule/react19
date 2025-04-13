import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, Stroke } from '../../utils/types';
import { endStroke } from '../shared-actions';

const initialStrokes: RootState['strokes'] = [];

const strokes = createSlice({
	name: 'strokes',
	initialState: initialStrokes,
	reducers: {
		setStrokes: (_, a: PayloadAction<Stroke[]>) => {
			return a.payload;
		}
	},
	extraReducers: (b) => {
		b.addCase(endStroke, (s, a) => {
			const {historyIndex, stroke} =a.payload;
			if(historyIndex === 0) {
				s.push(stroke)
			} else {
				s.splice(-historyIndex, historyIndex, stroke);
			}
		})
	}
})

export const {setStrokes} = strokes.actions;
export default strokes.reducer;