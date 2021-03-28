import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
import { filter as filterDispatch } from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="name"
        value={filters}
        onChange={e => {
          dispatch(filterDispatch(e.target.value));
        }}
      />
    </label>
  );
};

export default Filter;
