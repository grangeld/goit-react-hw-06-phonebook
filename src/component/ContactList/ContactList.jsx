import PropTypes from 'prop-types';
import s from './contactList.module.css';

const ContactList = ({ phoneList, onDelete }) => {
  return (
    <ul>
      {phoneList.map(data => (
        <li className={s.list} key={data.id}>
          <div>{data.name}:</div> {data.number}
          <button className={s.button} onClick={() => onDelete(data.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  phoneList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
