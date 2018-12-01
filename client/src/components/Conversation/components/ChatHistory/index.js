import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { ChatMessage } from './components';
import { getDate } from 'utils';
import './ChatHistory.scss';

class ChatHistory extends Component {
	renderMessages = () => {
		const { messages, selectedFriend: { id } } = this.props;
		const daywiseMessages = messages
		.filter((message) => {
			return message.to === id || message.from === id;
		})
		.reduce((list, message) => {
			const { timeCreated } = message;
			const date = getDate(timeCreated);
			list[date] = list[date] || [];
			list[date].push(message);
			return list;
		}, {});

		let dates = Object.keys(daywiseMessages);
		return dates.sort((date1, date2) => {
			return daywiseMessages[date1][0].timeCreated - daywiseMessages[date2][0].timeCreated;
		})
		.map((date) => {
			return (
				<Fragment key={date}>
					<div className="chat-date"><span>{date}</span></div>
						{
							daywiseMessages[date].map((message) => {
								return <ChatMessage key={message.id} message={message} friend={id} />
							})
						}
				</Fragment>
			)
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
