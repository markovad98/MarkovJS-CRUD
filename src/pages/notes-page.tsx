import React, { useState, useEffect} from 'react';
import NotesList from '../components/notes-list/notes-list';
import { INote } from '../interfaces/note'
import { NotesFilter } from '../components/notes-filter/notes-filter';
import { connect } from 'react-redux';

const NotesPage = ({ notes, loader }: any) => {
	
	const [filteredNotes, setFilteredNotes] = useState(notes)

	useEffect(() => {
		setFilteredNotes(notes)
	}, [notes])


	const filterByTextFunc = (key: string) => {
		notes && 
		setFilteredNotes(notes.filter(({title, body}: INote) => 
		title.toLowerCase().indexOf(key.toLowerCase()) !== -1 
		|| body.toLocaleLowerCase().indexOf(key.toLowerCase()) !== -1))
	}

	const filterByStatusFunc = (e: any) => {
		notes && setFilteredNotes(notes.filter(({status}: INote) => status === e.target.id))
	}

	const unsetFilters = () => {
		setFilteredNotes(notes)
	}

	return (
		<>
			<NotesFilter unsetFilters={unsetFilters} filterByStatusFunc={filterByStatusFunc} filterByTextFunc={filterByTextFunc}/>
			{<NotesList loader={loader} notes={filteredNotes} />}
		</>
		);
};

const mapStateToProps = (state: any) => {
	return {
		notes: state.notes,
		loader: state.loader
	};
};

export default connect(mapStateToProps)(NotesPage);
