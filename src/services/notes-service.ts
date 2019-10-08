import axios from 'axios';
import { INote } from '../interfaces/note';
import { addNoteAction, getNotesAction, removeNoteAction } from '../actions/notesActions';
import { store } from '../app/app';

export const notesService = () => {
	const BASE_USL = 'https://react-firebase-fa569.firebaseio.com';

	const getNotes = async () => {
		const res = await axios.get(`${BASE_USL}/notes.json`);
		const data = res.data && Object.entries(res.data).map((el: any) => ({ ...el[1], key: el[0] }));
		console.log('GET NOTES: ', data);
		store.dispatch(getNotesAction(data));
	};

	const addNote = async (title: string, body: string, status: string) => {
		let note: INote = { title, body, status };
		const res = await axios.post(`${BASE_USL}/notes.json`, note);
		console.log('ADD NOTES: ', res);
		note.key = res.data.name;
		store.dispatch(addNoteAction(note));
	};

	const removeNote = async (key: string) => {
		const res = await axios.delete(`${BASE_USL}/notes/${key}.json`);
		store.dispatch(removeNoteAction(key));
	};

	return {
		getNotes,
		addNote,
		removeNote
	};
};
