import { useDispatch, useSelector } from "react-redux";
import { Item, List, Btn } from "./Contacts.styled";
import {  selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from "redux/operations";


export const Contacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts)
  const dispatch = useDispatch()
    return (
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            return <Item key={id}>
                {name}: <span>{phone}</span>
                <Btn type="button" onClick={() =>dispatch(deleteContact(id))}>
                  Delete
                </Btn>
              </Item>
            
          })}
        </List>
    );
}

