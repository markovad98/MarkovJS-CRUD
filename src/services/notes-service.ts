import { hideLoader, showLoader } from './../actions/loaderActions';
import axios from 'axios';
import { INote } from '../interfaces/note';
import { addNoteAction, getNotesAction, removeNoteAction } from '../actions/notesActions';
import { store } from '../app/app';

export const notesService = () => {
	const BASE_USL = 'https://react-firebase-fa569.firebaseio.com';

	const getNotes = async () => {
		store.dispatch(showLoader());
		try {
			const res = await axios.get(`${BASE_USL}/notes.json`);
			const data = res.data && Object.entries(res.data).map((el: any) => ({ ...el[1], key: el[0] }));
			store.dispatch(getNotesAction(data));
			store.dispatch(hideLoader());
		} catch (err) {
			console.error(err);
			store.dispatch(hideLoader());
		}
	};

	const addNote = async (title: string, body: string, status: string) => {
		let note: INote = { title, body, status, date: new Date().toLocaleString() };

		try {
			const res = await axios.post(`${BASE_USL}/notes.json`, note);
			note.key = res.data.name;
			store.dispatch(addNoteAction(note));
		} catch (err) {
			console.error(err);
		}
	};

	const removeNote = async (key: string) => {
		try {
			await axios.delete(`${BASE_USL}/notes/${key}.json`);
			store.dispatch(removeNoteAction(key));
		} catch (err) {
			console.error(err);
		}
	};

	return {
		getNotes,
		addNote,
		removeNote
	};
};
