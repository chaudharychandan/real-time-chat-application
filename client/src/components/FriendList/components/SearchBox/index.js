import React from 'react';

import './SearchBox.scss';

const SearchBox = (props) => {
	const { onSearchTextChange } = props;

	return (
		<div className="SearchBox">
			<input placeholder="Search" onChange={(event) => onSearchTextChange(event.target.value)} />
		</div>
	);
}

export default SearchBox;
