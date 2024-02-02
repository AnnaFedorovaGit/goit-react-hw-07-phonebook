// import { createSelector } from '@reduxjs/toolkit'


// const selectContactsStore = state => state.contacts;
// const selectFilterStore = state => state.filter;
// 
// export const selectContacts = createSelector(
//     selectContactsStore,
//     contacts => contacts.contacts
// );
// export const selectIsLoading = createSelector(
//     selectContactsStore,
//     contacts.isLoading
// );
// export const selectError = createSelector(
//     selectContactsStore,
//     contacts => contacts.error
// );
// export const selectFilter = createSelector(
//     selectFilterStore,
//     filter => filter.filter
// );
// 
export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

