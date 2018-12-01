import React, { Component } from 'react';

import { ChatHistory, ComposeBox } from './components';
import { PersonInfo } from 'components';
import './Conversation.scss';

class Conversation extends Component {
	render() {
		const { friend } = this.props;

		return (
			<div className="Conversation">
				<PersonInfo person={friend} />
				<ChatHistory friend={friend} />
				<ComposeBox />
			</div>
		)
	}
}

export default Conversation;
