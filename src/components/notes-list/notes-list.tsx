import React, { useState, useEffect } from 'react';
import { INote } from '../../interfaces/note';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';
import { notesService } from '../../services/notes-service';
import './note-list.scss';
import { any } from 'prop-types';

export const NotesList = ({ notes }: any) => {
	console.log(notes);
	const { getNotes, removeNote } = notesService();

	useEffect(() => {
		getNotes();
	}, []);

	const badgeColorFunc = (status: string): string => {
		return status == 'High priority'
			? 'danger'
			: status == 'Medium priority' ? 'warning' : status == 'Low priority' ? 'secondary' : 'secondary';
	};

	return (
		<div className="notes-list">
			{notes &&
				notes.map(({ title, status, body, key = '' }: INote) => {
					const badgeColor = '';
					return (
						<Card key={key} className="notes-list__item">
							<CardBody>
								<h1>
									{title}&nbsp;<Badge color={badgeColorFunc(status)}>{status}</Badge>
								</h1>
								<CardText>{body}</CardText>
								<Button onClick={() => removeNote(key)} color="danger">
									Delete note
								</Button>{' '}
							</CardBody>
						</Card>
					);
				})}
		</div>
	);
};
