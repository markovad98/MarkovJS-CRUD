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
		if (title && body && status) {
			addNote(title, body, status);
		} else {
			alert('Fields are required');
		}

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
					<option style={{ display: 'none' }} value="" />
					<option value="grapefruit">Срочно</option>
					<option value="lime">Нужно</option>
					<option value="coconut">Необязательно</option>
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
