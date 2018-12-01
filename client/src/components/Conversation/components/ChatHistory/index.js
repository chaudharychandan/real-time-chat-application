import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ChatMessage } from './components';
import './ChatHistory.scss';

class ChatHistory extends Component {
	renderMessages = () => {
		const { messages, selectedFriend: { id } } = this.props;
		return messages
		.filter((message) => {
			return message.to === id || message.from === id;
		})
		.map((message) => {
			return <ChatMessage key={message.id} message={message} friend={id} />
		});
	}

	render() {
		return (
			<div className="ChatHistory">
				{ this.renderMessages() }
			</div>
		);
	}
}

const mapStateToProps = ({ messages, selectedFriend }) => ({
	messages,
	selectedFriend,
});

export default connect(mapStateToProps, null)(ChatHistory);
