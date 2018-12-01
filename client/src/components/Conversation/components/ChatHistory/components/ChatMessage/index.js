import React from 'react';

import { getTime } from 'utils'
import './ChatMessage.scss';

const ChatMessage = ({ message: { content, timeCreated, to, from }, friend }) => {
	return (
		<div className={`ChatMessage ${to === friend ? 'sent' : 'recieved'}`}>
			<span><span>{ content }</span> <span className="message-time">{ getTime(timeCreated) }</span></span>
		</div>
	);
}

export default ChatMessage;
