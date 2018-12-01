import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

import { loadState, saveState } from 'utils';

const persistedState = loadState();

const store = createStore(
  reducers, persistedState, applyMiddleware(thunk)
);

store.subscribe(() => {
  const { loggedInUser, messages } = store.getState();

  saveState({
    loggedInUser,
    messages,
  });
});

export default store;
