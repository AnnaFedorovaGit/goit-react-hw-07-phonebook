import { useDispatch, useSelector } from 'react-redux'
import { getContacts, getFilter } from '../../redux/selectors'
import { deleteContact } from '../../redux/contactsSlice'

import css from './ContactList.module.css'


const ContactList = () => {     
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filteredContacts = contacts.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <ul className={css.contactsList}>
            {(filter.length > 0 ? filteredContacts : contacts
              ).map(({ id, name, number }) => (
                  <li key={id}>
                      <p className={css.contactName}>{name}: </p>
                      <p className={css.contactNumber}>{number}</p>
                      <button type='button' className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
                  </li>
              ))
            }
        </ul>
    )
}


export default ContactList
