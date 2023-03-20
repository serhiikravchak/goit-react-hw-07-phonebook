import { useDispatch, useSelector } from "react-redux";
import { Item, List, Btn } from "./Contacts.styled";
import { getContacts,getFilter } from "redux/selectors";
import { getVisibleContacts } from "helpers/visibleContacts";
import { deleteContacts } from "redux/contactsSlice";


export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts,filter);
  const dispatch = useDispatch()
    return (
        <List>
          {visibleContacts.map(({ id, name, number }) => {
            return <Item key={id}>
                {name}: <span>{number}</span>
                <Btn type="button" onClick={() =>dispatch(deleteContacts(id))}>
                  Delete
                </Btn>
              </Item>
            
          })}
        </List>
    );
}

