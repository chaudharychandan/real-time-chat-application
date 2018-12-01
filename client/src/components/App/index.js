import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FriendList, Conversation, PersonInfo } from 'components';
import { fetchFriends } from 'actions';
import './App.scss';

class App extends Component {
  componentDidMount() {
		this.props.fetchFriends();
  }

  render() {
    const { friends, selectedFriend, loggedInUser } = this.props;
    return (
      <div className="App">
        <div className="SideBar">
          <PersonInfo person={loggedInUser} />
          <FriendList friends={friends} />
        </div>
        { selectedFriend ? <Conversation friend={selectedFriend} /> : <div className="SelectFriendMessage">Please select a friend to chat</div> }
      </div>
    );
  }
}

const mapStateToProps = ({ friends, loggedInUser, selectedFriend }) => ({
  friends,
  loggedInUser,
  selectedFriend,
});

export default connect(mapStateToProps, { fetchFriends })(App);
