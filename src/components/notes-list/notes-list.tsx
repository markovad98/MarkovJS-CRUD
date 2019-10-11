import React, { useState, useEffect } from 'react';
import { INote } from '../../interfaces/note';
import { Card, CardText, CardBody, Button, Badge, Spinner } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { notesService } from '../../services/notes-service';
import './note-list.scss';

const NotesList = ({ notes, loader, history }: any) => {
	const { getNotes, removeNote } = notesService();

	useEffect(() => {
		!notes.length && getNotes();
	}, []);

	const badgeColorFunc = (status: string): string => {
		return status == 'High priority'
			? 'warning'
			: status == 'Medium priority' ? 'info' : status == 'Low priority' ? 'secondary' : 'secondary';
	};

	return loader ? (
		<div className="spinner-wrapper">
			<Spinner color="primary" />
		</div>
	) : (
		<div className="notes-list">
			{notes && notes.length ? (
				notes.map(({ title, status, body, key = '' }: INote) => {
					const badgeColor = '';
					return (
						<Card key={key} className="notes-list__item">
							<CardBody>
								<h1>
									{title}&nbsp;<Badge color={badgeColorFunc(status)}>{status}</Badge>
								</h1>
								<CardText>{body}</CardText>
								<div className="note-btns">
									<Button onClick={() => removeNote(key)} color="danger">
										Delete note
									</Button>
									<Button onClick={() => history.push(`notes/${key}`)} color="primary">
										Details
									</Button>
								</div>
							</CardBody>
						</Card>
					);
				})
			) : (
				<h2>List is empty</h2>
			)}
		</div>
	);
};

export default withRouter(NotesList);
