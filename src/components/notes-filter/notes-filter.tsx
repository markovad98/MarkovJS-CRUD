import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'reactstrap';
import './notes-filter.scss';

export const NotesFilter = ({ filterByTextFunc, filterByStatusFunc, unsetFilters }: any) => {
	const [ key, setKey ] = useState('');

	const high = useRef({} as HTMLInputElement);
	const medium = useRef({} as HTMLInputElement);
	const low = useRef({} as HTMLInputElement);

	const unsetFiltersInner = () => {
		setKey('');
		unsetFilters();

		high.current.checked = false;
		medium.current.checked = false;
		low.current.checked = false;
	};

	useEffect(
		() => {
			filterByTextFunc(key);
		},
		[ key ]
	);

	return (
		<div className="notes-filter">
			<input
				className="filter-input"
				value={key}
				onChange={(e) => setKey(e.target.value)}
				type="text"
				placeholder="Filter"
			/>

			<div className="form-group">
				<h2 className="form-group-title">Priority:</h2>

				<ul className="priority-list">
					<li className="checkbox-label">
						<label htmlFor="">High</label>
						<input
							ref={high}
							onChange={filterByStatusFunc}
							id="High priority"
							name="priority"
							type="radio"
						/>
					</li>
					<li className="checkbox-label">
						<label htmlFor="">Medium</label>
						<input
							ref={medium}
							onChange={filterByStatusFunc}
							id="Medium priority"
							name="priority"
							type="radio"
						/>
					</li>
					<li className="checkbox-label">
						<label htmlFor="">Low</label>
						<input ref={low} onChange={filterByStatusFunc} id="Low priority" name="priority" type="radio" />
					</li>
				</ul>
			</div>

			<div className="reset-btn">
				<Button onClick={unsetFiltersInner} color="primary">
					Unset filters
				</Button>
			</div>
		</div>
	);
};
