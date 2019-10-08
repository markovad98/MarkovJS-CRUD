import React, { useState, useEffect } from 'react';
import { notesService } from '../../services/notes-service';

export const NotesList = ({ notes }: any) => {
	const { getNotes, removeNote } = notesService();

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<div className="notes">
			<ul className="notes-list">
				{notes ? (
					!!Object.keys(notes).length &&
					notes.map(({ title, status, body, key }: any) => {
						return (
							<li style={{ marginBottom: '30px' }} key={key} className="notes-list__item">
								{title}
								<hr />
								{body}
								<hr />
								{status}
								<button onClick={() => removeNote(key)}>DELETE NOTE</button>
							</li>
						);
					})
				) : (
					<h2>List is empty</h2>
				)}
			</ul>
		</div>
	);
};
