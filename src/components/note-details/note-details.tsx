import React, { useEffect, useState } from 'react';
import { Card, CardText, CardBody, Button, Badge, Spinner } from 'reactstrap';
import { INote } from '../../interfaces/note';
import { withRouter } from 'react-router-dom';
import { notesService } from '../../services/notes-service';
import './note-details.scss';

const NoteDetails = ({ location, notes, loader, ...props }: any) => {
	const { getNotes, removeNote } = notesService();
	const [ note, setNote ] = useState({ title: '', status: '', body: '', key: '' });

	useEffect(
		() => {
			!notes.length && getNotes();
			setNote(notes.find((note: INote) => note.key === location.pathname.replace('/notes/', '')));
		},
		[ notes ]
	);

	const badgeColorFunc = (status: string): string => {
		return status == 'High priority'
			? 'warning'
			: status == 'Medium priority' ? 'info' : status == 'Low priority' ? 'secondary' : 'secondary';
	};

	console.warn('DETAILS_NOTES: ', notes);
	console.warn('DETAILS_NOTES: ', loader);

	return loader ? (
		<div className="spinner-wrapper">
			<Spinner color="primary" />
		</div>
	) : (
		<Card key={note.key} className="notes-list__item">
			<CardBody>
				<h1>
					{note.title}&nbsp;<Badge color={badgeColorFunc(note.status)}>{note.status}</Badge>
				</h1>
				<CardText>{note.body}</CardText>
				<div className="note-btns">
					<Button onClick={() => removeNote(note.key)} color="danger">
						Delete note
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};

//@ts-ignore
export default withRouter(NoteDetails);
