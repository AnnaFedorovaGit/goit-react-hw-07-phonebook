import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts, selectFilter, selectError, selectIsLoading } from '../../redux/selectors'
import { fetchAll, deleteContactById } from '../../redux/contactsSlice'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'


import css from './ContactList.module.css'


const ContactList = () => {     
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContactById(contactId))
    }

    useEffect(() => { 
        dispatch(fetchAll());
    }, [dispatch]) 

    return (
        <>
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            <ul className={css.contactsList}> 
                {(filter.length > 0 ? filteredContacts : contacts
                ).map(({ id, name, phone }) => (
                    <li key={id}>
                        <p className={css.contactName}>{name}: </p>
                        <p className={css.contactNumber}>{phone}</p>
                        <button type='button' className={css.btn} onClick={() => dispatch(handleDeleteContact(id))}>Delete</button>
                        {/* <button type='button' className={css.btn} onClick={() => dispatch(deleteContactById(id))}>Delete</button> */}
                    </li>
                ))
                }
            </ul>
        </>
    )
}


    // const filteredContacts = contacts !== null && contacts.filter(contact =>
    //         contact.title.toLowerCase().includes(filter.toLowerCase().trim())
    // );
    
// <div className="productList">
        // {filteredProducts &&
        //   filteredProducts.map(({ id, title, description, price }) => {
        //     return (
        //       <div key={id} className="product"></div>


     


// {contacts !== null &&
//     contacts.map(({id, name, phone}) => {
//         return (
//             <li key={id}>
//                 <p className={css.contactName}>{name}: </p>
//                 <p className={css.contactNumber}>{phone}</p>
//                 <button type='button' className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
//             </li>
//         )
//     })
// }


export default ContactList
