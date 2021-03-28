import actionTypes from './contacts-types';

export const addContact = value => ({
  type: actionTypes.ADDCONTACT,
  payload: value,
});

export const deleteContact = value => ({
  type: actionTypes.DELETECONTACT,
  payload: value,
});

export const filter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
