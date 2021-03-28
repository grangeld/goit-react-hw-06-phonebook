import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import s from './app.module.css';
import { getFilter, getContacts } from '../redux/contacts/contacts-selector';
import { addContact as addContactDispatch } from '../redux/contacts/contacts-actions';
// [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

function App() {
  const filter = useSelector(getFilter);

  const initialNumberPhone = () =>
    JSON.parse(localStorage.getItem('numberObj')) || [];

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const setContacts = value => dispatch(addContactDispatch(value));
  // const [contacts, setContacts] = useState(initialNumberPhone);
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('numberObj', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddNewPhoneNumber = contact => {
    //Провекра, есть ли такие же имена
    if (!contacts.filter(e => e.name === contact.name).length > 0) {
      setContacts([...contacts, contact]);

      return true;
    }
    alert(`${contact.name} is already in contacts`);
    return false;
  };

  const normalizedFilter = filter.toLowerCase();
  const filterList = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  const onDelete = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div>
      <h1 className={s.heading}>Phonebook</h1>
      <ContactForm onAddContact={handleAddNewPhoneNumber} />
      <div className={s.contact}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList phoneList={filterList} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
