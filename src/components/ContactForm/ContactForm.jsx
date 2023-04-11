import React from 'react';
import PropTypes from 'prop-types';
import { Form, Label, FormBtn } from './ContactForm.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { onInputChange, onAddContact } = this.props;
    return (
      <Form
        onSubmit={onAddContact}
        // onSubmit={() => {
        //   onAddContact();
        //   this.resetForm();
        // }}
      >
        <Label>
          Name
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <input
            onChange={onInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <FormBtn type="submit">Add Contact</FormBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
