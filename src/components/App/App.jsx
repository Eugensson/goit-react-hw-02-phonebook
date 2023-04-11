import { ContactForm, ContactList, React, Filter } from 'components/App/index';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from 'components/App/App.styled';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onAddContact = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm
          onInputChange={this.onInputChange}
          onAddContact={this.onAddContact}
        />

        <SubTitle>Contacts</SubTitle>
        <Filter
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <ContactList
          contacts={this.state.contacts}
          filterContacts={this.filterContacts}
          onContactDelete={this.onContactDelete}
        />
      </Container>
    );
  }
}

export default App;
