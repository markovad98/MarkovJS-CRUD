import { ADD_NOTE, GET_NOTES, REMOVE_NOTE } from '../constants/reduxConstants';

export const addNoteAction = (note: any) => ({
	type: ADD_NOTE,
	payload: note
});

export const getNotesAction = (notes: any) => ({
	type: GET_NOTES,
	payload: notes
});

export const removeNoteAction = (key: string) => ({
	type: REMOVE_NOTE,
	payload: key
});
