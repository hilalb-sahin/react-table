

const SearchBox =(
    {
        names,
        setFilteredNames,

    }
) =>{

    const onSearchChange= (event)=>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        const all_names = [...names];
        const filteredNames = all_names.filter((name)=> {
            return name.toLocaleLowerCase().includes(searchFieldString);
        })

        setFilteredNames(filteredNames);    
      };

    return (
        <div className="search-box">
            <input placeholder="search" onChange={onSearchChange} /> 
        </div>
    )
}

export default SearchBox