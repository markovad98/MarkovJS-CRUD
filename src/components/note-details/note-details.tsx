import React from 'react';
import { withRouter } from 'react-router-dom';

const NoteDetails = ({ location, ...props }: any) => {
	console.warn(location);
	return <h1>{location.pathname.replace('/notes/', '')}</h1>;
};

export default withRouter(NoteDetails);
