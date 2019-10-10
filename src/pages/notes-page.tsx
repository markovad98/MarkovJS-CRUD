import React, { useState, useEffect } from 'react';
import { NotesList } from '../components/notes-list/notes-list';
import { INote } from '../interfaces/note'
import { NotesFilter } from '../components/notes-filter/notes-filter';
import { connect } from 'react-redux';

const NotesPage = ({ notes }: any) => {

	useEffect(() => {
		setFilteredNotes(notes)
	}, [notes])

	const [filteredNotes, setFilteredNotes] = useState(notes)

	const filterFunc = (key: string) => {
		notes && setFilteredNotes(notes.filter(({title, body}: INote) => title.indexOf(key) !== -1 || body.indexOf(key) !== -1))
	}


	return (
		<>
			<NotesFilter filterFunc={filterFunc}/>
			<NotesList notes={filteredNotes} />
		</>
		);
};

const mapStateToProps = (state: any) => {
	return {
		notes: state
	};
};

export default connect(mapStateToProps)(NotesPage);
