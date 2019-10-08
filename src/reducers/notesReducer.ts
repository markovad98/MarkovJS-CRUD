import { ADD_NOTE, GET_NOTES, REMOVE_NOTE } from '../constants/reduxConstants';

const handlers = {
	[ADD_NOTE]: (state: any, { payload }: any) => state && [ ...state, payload ],
	[GET_NOTES]: (state: any, { payload }: any) => payload && [ ...payload ],
	[REMOVE_NOTE]: (state: any, { payload }: { payload: string }) => state.filter((el: any) => el.key !== payload),
	DEFAULT: (state: any) => state
} as any;

export const notesReducer = (state: any, action: any) => {
	console.log('STATE: ', state, 'ACTION: ', action);
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action);
};
