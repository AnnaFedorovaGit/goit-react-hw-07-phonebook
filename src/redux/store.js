import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import { filterReducer } from './filterSlice'

import { persistStore, persistReducer } from 'redux-persist'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    // key: 'uniqueName',
	key: 'contacts',
	storage,
    whitelist: ['contacts'],
    // whitelist: ['contacts', 'filter'],
    // blacklist: ['filter'],
}

export const store = configureStore({
    reducer: {
        // contacts: contactsReducer,
        contacts: persistReducer(persistConfig, contactsReducer),
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>  
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
});


export const persistor = persistStore(store)