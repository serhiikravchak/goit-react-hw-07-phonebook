export const getVisibleContacts = (contacts, filter) =>
    contacts.filter(contacts => contacts.name.toLowerCase().includes(filter.toLowerCase()));