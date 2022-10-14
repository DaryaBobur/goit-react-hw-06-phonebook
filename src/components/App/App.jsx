import ContactForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContainerApp, Title, Subtitle } from './AppStyled';


const App = () => {

  return (
    <ContainerApp>
      <Title>Phonebook</Title>
      <ContactForm />

      <Subtitle>Contacts</Subtitle>

      <Filter />

      <ToastContainer 
        autoClose={3000} 
        theme={'colored'}
      />

    </ContainerApp>
  )
};

export default App;