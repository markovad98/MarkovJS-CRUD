import axios from 'axios';

export const notesService = () => {
	const BASE_USL = 'https://react-firebase-fa569.firebaseio.com';

	const getNotes = async () => {
		const res = await axios.get(`${BASE_USL}/notes.json`);
		console.log(res);
	};

	const addNote = async (title: string, body: string, status: string) => {
		const note = { title, body, status };
		const res = await axios.post(`${BASE_USL}/notes.json`, note);
		console.log(res);
	};

	const removeNote = async (id: number) => {
		const res = await axios.delete(`${BASE_USL}/notes/${id}.json`);
		console.log(res);
	};

	return {
		getNotes,
		addNote,
		removeNote
	};
};
