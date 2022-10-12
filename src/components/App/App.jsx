// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { ContainerApp, Title, Subtitle } from './AppStyled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { configureStore } from '@reduxjs/toolkit'
import { addContact, contactsSlice, filtersSlice } from 'redux/slice';
import { useDispatch } from 'react-redux';
import { filterName  } from 'redux/slice';

export const store = configureStore({
  reducer: {
contacts: contactsSlice.reducer,
filter: filtersSlice.reducer
  },
})

const App = () => {

  // const dataContacts = useSelector(state => state)
  // console.log(dataContacts.contacts)
  const dispatch = useDispatch();
 

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])

  // const addContact = (data) => {
  //   if(duplicateName(data)) {
  //     return toast.error(`${data.name} is already in contacts!`)
  //   }

  //   const contact = {
  //     id: nanoid(),
  //     name: data.name,
  //     number: data.number,
  //   }
   
  //   setContacts(prevState => [contact, ...prevState]);
  // };

  // const removeContact = (id) => {
  //   setContacts(prevState => prevState.filter((contact) => contact.id !== id));
  // };
// const dataFilter = useSelector(state => state.filterName)
// console.log(dataFilter)

  // const filterNamesContacts = e => {
  //   // setFilter(e.currentTarget.value);
  //   dispatch(filter(e.target.value))

  // };

  // const getFilteredContacts = () => {
 
  //   if(!filter) {
  //     return contacts;
  //   }

  //   const normalizedFilter = filter.toLocaleLowerCase();

  //   const filteredContacts = contacts.filter(({ name }) => {
  //     const normalizedName = name.toLocaleLowerCase();
  //     return normalizedName.includes(normalizedFilter);
  //   })

  //   return filteredContacts;
    
  // };

  // const duplicateName = ({ name }) => {
  //   return contacts.find((contact) => contact.name === name);
  // };

  return (
    <ContainerApp>
      <Title>Phonebook</Title>
      <ContactForm 
        onSubmit={()=> dispatch(addContact())}
      />

      <Subtitle>Contacts</Subtitle>

      <Filter 
        // value={filter} 
        onChange={()=>dispatch(filterName())}
      />

      <ContactsList 
        // contacts={getFilteredContacts()} 
        // removeContact={removeContact}
      />

      <ToastContainer 
        autoClose={3000} 
        theme={'colored'}
      />

    </ContainerApp>
  )
};

export default App;