import React from 'react';

import './FriendCard.scss';

const FriendCard = (props) => {
	const { friend, selected, onSelect } = props;
	const { name, avatar } = friend;

	return (
		<div className={`FriendCard ${selected ? 'selected' : ''}`} onClick={() => onSelect(friend)}>
			<img src={avatar} alt={name} /> <span>{ name }</span>
		</div>
	);
}

export default FriendCard;
