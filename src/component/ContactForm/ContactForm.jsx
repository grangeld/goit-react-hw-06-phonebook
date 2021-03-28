import PropTypes from 'prop-types';
import s from './contactForm.module.css';
import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    //рандомный id
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz×ℂ℃℄℅℆ℇ℈℉ℊℋℌℍℎℏℐℑℒℓ℔ℕ№℗℘ℙℚℛℜℝ℞℟℠℡™℣ℤ℥Ω℧ℨ℩KÅℬℭ℮ℯ ℴ⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅟ℵℶ℻ℽℾℿ⅀⅁⅂⅃⅄ⅅⅆⅇⅈⅉ⅊⅋⅍ⅎⅭⅮⅯ∀∁∂∃∄∅∆∇';
    const id =
      +new Date() +
      possible.charAt(Math.floor(Math.random() * possible.length));
    if (name === '' || number === '') return;
    if (
      onAddContact({
        id,
        name,
        number,
      })
    ) {
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.decor}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
      </label>

      <label className={s.label}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>

      <input type="submit" value="Add contact" className={s.buttonSubmit} />
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
