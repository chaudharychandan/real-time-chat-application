import { combineReducers } from 'redux';
import friendsReducer from 'reducers/friends';
import selectedFriendReducer from 'reducers/selectedFriend';
import loggedInUserReducer from 'reducers/loggedInUser';
import messagesReducer from 'reducers/messages';

export default combineReducers({
	friends: friendsReducer,
	selectedFriend: selectedFriendReducer,
	loggedInUser: loggedInUserReducer,
	messages: messagesReducer,
});
