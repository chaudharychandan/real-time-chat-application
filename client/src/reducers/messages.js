import { 
  ADD_MESSAGE
} from 'actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};
