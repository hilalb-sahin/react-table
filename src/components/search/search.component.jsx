
import React  from 'react';
import { useState, useEffect } from 'react';

import SearchBox from '../search-box/search-box.component';
import FormInput from '../form-input/form-input.component';

const Search = () =>{
  //array destruction
  const[searchField, setSearchField]= useState('');
  const[filteredNames, setFilteredNames] = useState(names);
  const {names} = useState(FormInput);


  useEffect(()=>{
    const newFilteredNames = names.filter((name)=> {
      return name.toLocaleLowerCase().includes(searchField);
    });
    console.log("fired filtered")
    setFilteredNames(newFilteredNames);
  }, [names, searchField]);

  const onSearchChange= (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };



  return (
    <div className="App">
    <h1>Monster Search</h1>
    
    <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search monsters' className = 'monsters-search-box'/>
{/*  <CardList filteredMonsters= {this.state.filteredMonsters}/>  */}
       
    </div>
  );
}
export default Search;