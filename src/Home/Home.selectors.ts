import { RootState } from "../state/store";

const homeSelector = (state: RootState) => state.homeReducer;

export default homeSelector;
