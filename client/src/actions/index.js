import axios from 'axios';
import io from 'socket.io-client';

import { FETCH_FRIENDS, SELECT_FRIEND, LOGIN_USER, ADD_MESSAGE } from './types';
import { generateRandomNum } from 'utils';
import store from 'store';

let socket;

export const fetchFriends = () => async dispatch => {
	const { data } = await axios.get('./friends.json');

	setLoggedInUser(data);

	dispatch({
		type: FETCH_FRIENDS,
		payload: data
	});
};

export const onSelectFriend = friend => dispatch => {
	dispatch({
		type: SELECT_FRIEND,
		payload: friend
	});
};

export const sendMessage = message => dispatch => {
	dispatch({
		type: ADD_MESSAGE,
		payload: message
	});

	emitMessage(message);
};

export const recieveMessage = (message) => {
	store.dispatch({
		type: ADD_MESSAGE,
		payload: message
	});
};

const setLoggedInUser = (users) => {
	let { loggedInUser } = store.getState();
	let index;
	if(!loggedInUser) {
		index = generateRandomNum(users.length);
		loggedInUser = users[index];
		store.dispatch({
			type: LOGIN_USER,
			payload: loggedInUser
		});
	} else {
		index = users.findIndex((user) => {
			return user.id === loggedInUser.id;
		});
	}
	users.splice(index, 1);

	setSocketConnection(loggedInUser);
};

const emitMessage = (message) => {
  socket.emit('message', message);
};

const setSocketConnection = (user) => {
	socket = io();

	socket.on('connect', function () {
		socket.emit('login', user);
	});

	socket.on('message', (message) => {
		recieveMessage(message);
	});
};
