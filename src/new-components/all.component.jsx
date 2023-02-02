import { useState } from "react";
import Table from "./table/table.component";
const All = () => {

    const [names, setNames] = useState([]);
    const [currentName, setCurrentName] = useState('');

    const onClickHandler = () => {
        setNames(currentName);
        console.log(names);
    }

    const onChangeHandler = (event) => {
        const {value} = event.target;
        setCurrentName(value);
        console.log(value);
        console.log(currentName);
    }

    return(
        <>
       <Table names= {names}/>
       <input onChange={onChangeHandler} />
       <button onClick={() => {(onClickHandler())}}>add </button>       
       </>
    )
}

export default All;