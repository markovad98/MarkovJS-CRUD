import { SHOW_LOADER, HIDE_LOADER } from '../constants/reduxConstants';
import { IAction } from '../interfaces/action';

const handlers = {
	[SHOW_LOADER]: () => true,
	[HIDE_LOADER]: () => false,
	DEFAULT: (state: boolean) => state
} as any;

export const loaderReducer = (state = false, action: IAction) => {
	const handler = handlers[action.type] || handlers.DEFAULT;
	return handler(state, action.payload);
};
