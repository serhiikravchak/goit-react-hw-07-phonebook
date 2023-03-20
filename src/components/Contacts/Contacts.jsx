import { useDispatch, useSelector } from "react-redux";
import { Item, List, Btn } from "./Contacts.styled";
import { selectContacts, selectFilter, selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from "redux/operations";


export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = selectVisibleContacts(contacts,filter);
  const dispatch = useDispatch()
    return (
        <List>
          {visibleContacts.map(({ id, name, number }) => {
            return <Item key={id}>
                {name}: <span>{number}</span>
                <Btn type="button" onClick={() =>dispatch(deleteContact(id))}>
                  Delete
                </Btn>
              </Item>
            
          })}
        </List>
    );
}

