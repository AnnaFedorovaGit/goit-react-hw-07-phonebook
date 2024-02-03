import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from 'services/api'


const initState = {
    contacts: [],
    isLoading: false,
    error: null,
};

export const fetchAll = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => { 
    try {
        const contacts = await fetchContacts();
        return contacts;
    } catch (error) {
        // !!!rejectWithValue - обязательно
        return thunkAPI.rejectWithValue(error.message);
    }
});

// export const addContact 
export const addContactNew = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => { 
    try {
        const contact = await addContact(newContact);
        return contact;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// export const deleteContact
export const deleteContactById = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => { 
    try {
        const deletedContact = await deleteContact(contactId);
        return deletedContact;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchAll.pending, handlePending)
        // .addCase(fetchAll.pending, state => {
        //     state.isLoading = true;
        //     state.error = null;
        // })
        .addCase(fetchAll.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = action.payload;
        })
        .addCase(fetchAll.rejected, handleRejected)
        // .addCase(fetchAll.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // })
        .addCase(addContactNew.pending, handlePending)
        // .addCase(addContactNew.pending, state => {
        //     state.isLoading = true;
        //     state.error = null;
        // })
        .addCase(addContactNew.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts.push(action.payload);
            // state.contacts.unshift(action.payload);
            // state.contacts = [action.payload, ...state.contacts];
        })
        .addCase(addContactNew.rejected, handleRejected)
        // .addCase(addContactNew.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // })
        .addCase(deleteContactById.pending, handlePending)
        // .addCase(deleteContactById.pending, state => {
        //     state.isLoading = true;
        //     state.error = null;
        // })
        .addCase(deleteContactById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload.id
            );
            // 
            // const deleteContactIndex = state.contacts.findIndex(contact => contact.id === action.payload.id)
            // state.contacts.splice(deleteContactIndex, 1)
        })
        .addCase(deleteContactById.rejected, handleRejected)
        // .addCase(deleteContactById.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // })
});


export const contactsReducer = contactsSlice.reducer;
