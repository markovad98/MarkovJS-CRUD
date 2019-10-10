import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './notes-filter.scss';

export const NotesFilter = ({ filterByTextFunc, filterByStatusFunc, unsetFilters }: any) => {
	const [ key, setKey ] = useState('');

	const unsetFiltersInner = () => {
		setKey('');
		unsetFilters();
	};

	useEffect(
		() => {
			filterByTextFunc(key);
		},
		[ key ]
	);

	return (
		<div className="notes-filter">
			<input value={key} onChange={(e) => setKey(e.target.value)} type="text" placeholder="Filter" />

			<div className="form-group">
				<h2 className="form-group-title">Priority:</h2>

				<div className="checkbox-label">
					<label htmlFor="">High</label>
					<input onChange={filterByStatusFunc} id="High priority" name="priority" type="radio" />
				</div>
				<div className="checkbox-label">
					<label htmlFor="">Medium</label>
					<input onChange={filterByStatusFunc} id="Medium priority" name="priority" type="radio" />
				</div>
				<div className="checkbox-label">
					<label htmlFor="">Low</label>
					<input onChange={filterByStatusFunc} id="Low priority" name="priority" type="radio" />
				</div>
			</div>

			<Button onClick={unsetFiltersInner} color="primary">
				Unset filters
			</Button>
		</div>
	);
};
