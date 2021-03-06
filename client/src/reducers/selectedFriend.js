import { 
  SELECT_FRIEND
} from 'actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_FRIEND:
      return action.payload;
    default:
      return state;
  }
};
