import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalState = {
	isShown: boolean;
	modalName: string | null;
}

const initialState: ModalState = {
	isShown: true,
	modalName: null
}

const slice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		show: (s, a: PayloadAction<string>) => {
			s.isShown = true;
			s.modalName = a.payload
		},
		hide: (s) => {
			s.isShown = false;
			s.modalName = null;
		},
	}
})

export const modalVisible = slice.reducer;
export const {show, hide} = slice.actions;