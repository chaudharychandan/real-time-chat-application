import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SearchBox, FriendCard } from './components';
import { fetchFriends, onSelectFriend } from 'actions';
import './FriendList.scss';

class FriendList extends Component {
	state = { searchText: '' };

	renderFriends = () => {
		const { selectedFriend, onSelectFriend, friends } = this.props;
		const { searchText } = this.state;
		const re = new RegExp(searchText, 'i');

		return friends
		.filter(friend => friend.name.match(re))
		.map(friend => <FriendCard key={friend.id} friend={friend} onSelect={onSelectFriend} selected={friend.id === selectedFriend.id} />)
	}

	onSearchTextChange = searchText => {
		this.setState({ searchText });
	}

	render() {
		return (
			<div className="FriendsContainer">
				<div className="SearchBoxContainer">
					<SearchBox onSearchTextChange={this.onSearchTextChange} />
				</div>
				<div className="List">
				{ this.renderFriends() }
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ selectedFriend }) => ({
	selectedFriend,
});

export default connect(mapStateToProps, { fetchFriends, onSelectFriend })(FriendList);
