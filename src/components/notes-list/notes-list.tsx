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
				notes.map(({ title, status, body, key = '', date }: INote) => {
					return (
						<Card key={key} className="notes-list__item">
							<CardBody className="note-body">
								<div className="title-body-wrapper">
									<h1>
										{title}&nbsp;<Badge color={badgeColorFunc(status)}>{status}</Badge>
									</h1>
									<strong className="note-date">{date}</strong>
									<CardText>{body}</CardText>
								</div>

								<div className="note-btns">
									<Link to={`notes/${key}`}>
										<Button color="primary">Details</Button>
									</Link>
									<Button onClick={() => removeNote(key)} color="danger">
										Delete note
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
