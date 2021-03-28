import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const items = (
  state = JSON.parse(localStorage.getItem('numberObj')) || initialState.items,
  { type, payload },
) => {
  switch (type) {
    case actionTypes.ADDCONTACT:
      return payload;

    case actionTypes.DELETECONTACT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
