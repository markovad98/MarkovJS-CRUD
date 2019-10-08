import React from 'react';
import { NotesList } from '../components/notes-list/notes-list';
import { connect } from 'react-redux';

const NotesPage = ({ notes }: any) => {
	console.log('NOTES IN NOTES_PAGE: ', notes);
	return <NotesList notes={notes} />;
};

const mapStateToProps = (state: any) => {
	return {
		notes: state
	};
};

export default connect(mapStateToProps)(NotesPage);
