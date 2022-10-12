import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Contacts } from './ContactsListStyled';
import { useSelector, useDispatch } from 'react-redux';
import {removeContact} from '../../redux/slice'

const ContactsList = () => {
   const dispatch = useDispatch();
   const contact = useSelector(state => state.contacts);

   return (  
      <Contacts>
         {contact.map(({ name, number, id }) => 
            <li key={nanoid()}>
               <p>- {name}: {number}</p>
               <button type='button' onClick={()=> dispatch(removeContact(id))}>Delete</button>
            </li>)
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