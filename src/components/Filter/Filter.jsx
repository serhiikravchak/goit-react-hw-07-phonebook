

import { useDispatch, useSelector } from "react-redux";
import { FilterInput, Label, Wrapper } from "./Filter.styled";
import { getFilter } from "redux/selectors";
import { setFilter } from "redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Wrapper>
      <Label>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={e=> dispatch(setFilter(e.target.value))} />
      </Label>
    </Wrapper>
  );
};

