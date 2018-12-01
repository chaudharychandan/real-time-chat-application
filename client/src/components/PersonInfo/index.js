import React, { Fragment } from 'react';

import './PersonInfo.scss';

const PersonInfo = (props) => {
	const { person } = props;
	if(person) {
		var { name, avatar } = person;
	}

	return (
		<div className="PersonInfo">
			{ person ? <Fragment><img src={avatar} alt={name} /> <span>{ name }</span></Fragment> : null }
		</div>
	);
}

export default PersonInfo;
