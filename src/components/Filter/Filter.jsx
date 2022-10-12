// import PropTypes from 'prop-types';
import { Label } from "./FilterStyled";
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const dataFilter = useSelector(state => state.filter.filterContacts)

  const filterNamesContacts = e => {
    dispatch(filterName(e.target.value))
  };



  // const getFilteredContacts = () => {
 
  //   if(!filter) {
  //     return contacts;
  //   }

  //   const normalizedFilter = filter.toLocaleLowerCase();

  //   const filteredContacts = contacts.filter(({ name }) => {
  //     const normalizedName = name.toLocaleLowerCase();
  //     return normalizedName.includes(normalizedFilter);
  //   })

  //   return filteredContacts;
    
  // };



    return (
      <Label>
      Find contacts by name
      <input type="text" 
      value={dataFilter} 
      name="filter" 
      onChange={filterNamesContacts} />
    </Label>)
    }
  


// Filter.propTypes = {

//   onChange: PropTypes.func,
// }
  
export default Filter;