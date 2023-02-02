

const Table = ({names}) => {

    return(
        <table>
        <tr>
          <th>No.</th>
          <th>Name</th> 
          <th>Edit/Delete</th> 
        </tr>
       
        {names?.map((name) =>
          <>
              <tr>
                <td>{names.indexOf(name)}</td> 
                <td>{name}</td>
                <td>
                <button onClick={()=> {}}>Delete</button>
              </td>
              </tr>
          </>
            )}
      
      </table>
    )
    
}
export default Table