import React, { useState } from 'react';
import { notesService } from '../../services/notes-service';
import './add-note.scss';

export const AddNote = () => {
	const { addNote } = notesService();

	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');
	const [ status, setStatus ] = useState('');

	const onSubmit = (e: any) => {
		e.preventDefault();
		addNote(title, body, status);

		console.log(title + ' ' + status + ' ' + body);
		setTitle('');
		setBody('');
		setStatus('');
	};

	return (
		<form className="add-note">
			<div className="form-group">
				<label>Title</label>
				<input
					type="text"
					placeholder="with a placeholder"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>

			<div className="form-group">
				<label>Status</label>
				<select value={status} onChange={(e) => setStatus(e.target.value)}>
					<option style={{ display: 'none' }} value="">
						Hello
					</option>
					<option value="grapefruit">Грейпфрут</option>
					<option value="lime">Лайм</option>
					<option value="coconut">Кокос</option>
					<option value="mango">Манго</option>
				</select>
			</div>

			<div className="form-group">
				<label>Body</label>
				<textarea placeholder="with a placeholder" value={body} onChange={(e) => setBody(e.target.value)} />
			</div>
			<button onClick={(e: any) => onSubmit(e)}>Add note</button>
		</form>
	);
};
