import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHomSlice {
	isFsCheck: boolean;
	isFsHighlight: boolean;
	isIACheck: boolean;
	isIaHighlight: boolean;
}

const initialState: IHomSlice = {
	isFsCheck: false,
	isFsHighlight: false,
	isIACheck: false,
	isIaHighlight: false
};

export const HomeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {
		checkFsAction: (state: IHomSlice, action: PayloadAction<boolean>) => {
			if (!action.payload) {
				return { ...initialState };
			}

			return { ...state, isFsCheck: true };
		},
		checkIaAction: (state: IHomSlice, action: PayloadAction<boolean>) => {
			if (action.payload) {
				return { ...state, isFsCheck: true, isIACheck: true };
			}

			return { ...state, isIACheck: false, isIaHighlight: false, isFsHighlight: false };
		},
		highlightFsBulbAction: (state: IHomSlice, action: PayloadAction<boolean>) => {
			return { ...state, isFsHighlight: action.payload };
		},
		highlightIaBulbAction: (state: IHomSlice, action: PayloadAction<boolean>) => {
			return { ...state, isIaHighlight: action.payload };
		}
	}
});

// Action creators are generated for each case reducer function
export const { checkFsAction, checkIaAction, highlightFsBulbAction, highlightIaBulbAction } = HomeSlice.actions;

export default HomeSlice.reducer;
