import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Contacts } from './ContactsListStyled';
import { removeContact } from '../../redux/contactsSlice'

const ContactsList = ({ contacts }) => {
   const dispatch = useDispatch();

   return (  
      <Contacts>
         {contacts.map(({ name, number, id }) => 
            <li key={nanoid()}>
               <p>- {name}: {number}</p>
               <button type='button' onClick={()=> dispatch(removeContact(id))}>Delete</button>
            </li>
            )
         }
      </Contacts>
   )
}

ContactsList.propTypes = {
   removeContact: PropTypes.func,
   contacts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
   }))
}

export default ContactsList;