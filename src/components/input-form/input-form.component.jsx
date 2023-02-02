import './input-form.styles.css'


const InputForm = ({
    setFormFields,
    currentName,
    setCurrentName,
    names,
    filteredNames,
    setFilteredNames

}) => {

    // change input value to state
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
    //update filteredNames when you edit a name , when you click save
    const sortNames = () => {
        let sortedArr = [...filteredNames];
        sortedArr.sort();
        setFilteredNames(sortedArr);
    }



    return (
        <div>
            <input class="form__field" placeholder="add" onChange={handleChange} id="name-input" />
            <div className="buttons">
                <button class="button-9" role="button" onClick={() => { handleSubmit() }} type="submit">add </button>
                <button class="button-9" role="button" onClick={sortNames}> sort Names</button>
            </div>

        </div>
    )
}

export default InputForm;