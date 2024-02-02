import axios from 'axios';


const api = axios.create({
    baseURL: 'https://65bbdfca52189914b5bd4157.mockapi.io/'
})

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
export const fetchContacts = async () => { 
    const { data } = await api.get('/contacts')
	return data
}

// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
export const addContact = async (newContact) => { 
    const { data } = await api.post('/contacts', newContact)
	return data
}

// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".
export const deleteContact = async (contactId) => { 
    const { data } = await api.delete(`/contacts/${contactId}`)
	return data
}
