import React, { useState, useEffect } from 'react';
import './notes-filter.scss';

export const NotesFilter = ({ filterFunc }: any) => {
	const [ key, setKey ] = useState('');

	useEffect(
		() => {
			filterFunc(key);
		},
		[ key ]
	);

	return (
		<div className="notes-filter">
			<input value={key} onChange={(e) => setKey(e.target.value)} type="text" placeholder="Filter" />
		</div>
	);
};
