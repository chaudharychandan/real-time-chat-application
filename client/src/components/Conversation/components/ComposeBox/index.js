import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { sendMessage } from 'actions';
import './ComposeBox.scss';

class ComposeBox extends Component {
	state = { message: '' };

	onMessageChange = (event) => {
		this.setState({ message: event.target.value });
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		const { loggedInUser, selectedFriend } = this.props;

		this.props.sendMessage({
			id: uuid(),
			content: this.state.message,
			timeCreated: +new Date(),
			from: loggedInUser.id,
			to: selectedFriend.id
		});

		this.setState({ message: '' });
	}

	render() {
		const { message } = this.state;

		return (
			<div className="ComposeBox">
				<form onSubmit={this.onFormSubmit}>
					<input type="text" autoFocus onChange={this.onMessageChange} value={message} />
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ loggedInUser, selectedFriend }) => ({
	loggedInUser,
	selectedFriend
});

export default connect(mapStateToProps, { sendMessage })(ComposeBox);
