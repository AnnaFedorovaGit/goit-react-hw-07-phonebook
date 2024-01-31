import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/contactsSlice'
import { getContacts } from '../../redux/selectors'
import { nanoid } from 'nanoid'

import css from './ContactForm.module.css'


 const ContactForm = () => { 
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	 const createContact = (e) => {
		e.preventDefault();
		 
		const name = e.target[0].value;
		const number = e.target[1].value;

		const newContact = {
			name: name,
			number: number,
			id: nanoid(),
		}

		const isDuplicated = contacts.find((el) => el.name === name && el.number === number)
		if (isDuplicated) {
			return alert(`${name} is already in contacts.`)
		}
			
		dispatch(addContact(newContact));
		 
		e.target[0].value = '';
		e.target[1].value = '';	
	}
    
	return (
		<form onSubmit={createContact} className={css.form}>
			<div className={css.wrapper}>
				<label className={css.formLabel}>
					Name
				</label>
				<input type="text" name="name" className={css.formInput} required /> 
			</div>
			<div className={css.wrapper}>
				<label className={css.formLabel}>
					Phone
				</label>
				<input type="tel" name="number" className={css.formInput} required /> 
			</div>
			<button type='submit' className={css.btn}>
				Add contact
			</button>
		</form>
	)	
}

    
export default ContactForm