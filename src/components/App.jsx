import React from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Box } from './App.styled';


export const App = () => {
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


  


