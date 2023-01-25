import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import css from './App.module.css';
import { useSelector } from 'react-redux';


export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading)
  console.log(isLoading)
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
};
