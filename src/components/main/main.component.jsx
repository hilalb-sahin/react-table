import { useState, useEffect } from "react"

import InputForm from "../input-form/input-form.component";
import SearchBox from "../search-box/search-box.component";
import '../button.styles.css';
import './form-input.styles.css';

const Main = ({ label, ...otherProps }) => {

  const defaultFormFields = {
    names: [],
  }


  const [indexToEdit, setIndexToEdit] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentName, setCurrentName] = useState('')
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { names } = formFields;
  const [filteredNames, setFilteredNames] = useState(names);


  //update filteredNames whenever you submit new name
  useEffect(() => {
    setFilteredNames(names);
  }, [formFields])

  //
  useEffect(() => {
    const newFilteredNames = names.filter((name) => {
      return name.toLocaleLowerCase().includes(currentName);
    });
    setFilteredNames(newFilteredNames);
  }, []);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    const all_names = [...names];
    const filteredNames = all_names.filter((name) => {
      return name.toLocaleLowerCase().includes(searchFieldString);
    })

    setFilteredNames(filteredNames);
  };


  const sortNames = () => {
    let sortedArr = [...filteredNames];
    sortedArr.sort();
    setFilteredNames(sortedArr);
  }


  //create new list without the item
  const removeFromList = (nameToRemove) => {
    let new_names = [];
    new_names = [...names];

    const result = new_names?.filter(name => name !== nameToRemove)
    setFormFields({ names: result })

  }

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentName(value);
  }

  // to do : create new array instead of pushing 
  const handleSubmit = () => {

    setCurrentName('');
    let newArr = [...names, currentName];
    setFormFields({ names: newArr });
    setCurrentName('');

    //reset input field
    document.getElementById("name-input").value = "";
  }

  const toggleIsEditing = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  //update filteredNames when you edit a name , when you click save
  const setUpdatedNames = () => {

    const updatedNames = [...filteredNames];
    updatedNames[indexToEdit] = inputValue;
    setFilteredNames(updatedNames);
    setInputValue('');

  }

  //gets the value of the input value being edited
  const inputValueGetter = (event, index) => {
    setInputValue(event.target.value);
    setIndexToEdit(event.currentTarget.id);
  }

  //<input placeholder="add" onChange= {handleChange} id = "name-input"   />  
  //<button onClick={() => {handleSubmit()}} type="submit">add </button>
  //            <button onClick={sortNames}> sort Names</button>  
  //            <input placeholder="search" onChange={onSearchChange} />   
  return (

    
    <div className="mainContainer">
          <h1 class="panel-heading" >User Table</h1>

      <SearchBox
        names={names}
        setFilteredNames={setFilteredNames}
      />

      <InputForm
        //pass props needed for input form
        setFormFields={setFormFields}
        currentName={currentName}
        setCurrentName={setCurrentName}
        names={names}
        filteredNames={filteredNames}
        setFilteredNames={setFilteredNames}
      />



<div class="container">
    <div class="panel panel-default">

        <div class="panel-body">
      <table class="table-latitude">
        <thead>
          <th>No.</th>
          <th>Name</th>
          <th>Edit/Delete</th>
        </thead>
    

      <tbody>
        {filteredNames.map((name, index) =>
          <>
            <tr key={index}>
              <td>{index}</td>

              {index == currentIndex && isEditing ? (
                <td>
                  <input onChange={(event, index) => inputValueGetter(event, index)} id={index} placeholder={name} />
                  <button class="button-14" role="button"   onClick={toggleIsEditing}>Stop editing</button>
                  <button class="button-14" role="button" onClick={() => { setUpdatedNames() }}>Save</button>
                  <td className='edit' id={index}>{inputValue} </td>
                </td>
              ) : (
                <td className='edit' id={index}>{name}</td>
              )
              }
              <td>
                <button  class="button-9" role="button"  id={index} onClick={(e) => {

                  setCurrentIndex(e.currentTarget.id);
                  isEditing ? setIsEditing(false) : setIsEditing(true);

                }}>Edit</button>
                <button  class="button-9" role="button" onClick={() => { removeFromList(name) }}>Delete</button>
              </td>
              
            </tr>
          
          </>
          
        )}
        </tbody>
      </table>
      </div>
      
      </div>
      
    </div>
    <tfoot>
                    <tr>
                        <td >
                          
                          email: burcusahin123hilal@hotmail.com
                        </td>
                    </tr>
                </tfoot>

    </div>
    
 
  )
     
}

export default Main;