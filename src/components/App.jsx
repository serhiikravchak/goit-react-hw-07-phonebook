import React from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Box } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  

  return (
    <>
      <Box>
        <h1>Phonebook</h1>
        <Phonebook  />

        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </Box>
    </>
  );


}


  


