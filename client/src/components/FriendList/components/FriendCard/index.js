import React from 'react';

import './FriendCard.scss';

const FriendCard = (props) => {
	const { friend, selected, onSelect } = props;

	return (
		<div className={`FriendCard ${selected ? 'selected' : ''}`} onClick={() => onSelect(friend)}>
			{ friend.name }	
		</div>
	);
}

export default FriendCard;
