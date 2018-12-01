import React from 'react';

import './PersonInfo.scss';

const PersonInfo = (props) => {
	const { person } = props;
	return (
		<div className="PersonInfo">
			{ person ? <div>{ person.name }</div> : null }
		</div>
	);
}

export default PersonInfo;
