import React from 'react';
import NoteDetails from '../components/note-details/note-details';
import { connect } from 'react-redux';

const NoteDetailsPage = ({ notes, loader }: any) => {
	return <NoteDetails notes={notes} loader={loader} />;
};

const mapStateToProps = (state: any) => {
	return {
		notes: state.notes,
		loader: state.loader
	};
};

export default connect(mapStateToProps)(NoteDetailsPage);
