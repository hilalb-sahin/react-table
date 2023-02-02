import { useState } from "react";


import FormInput from "../form-input/form-input.component";



//set default values
const defaultFormFields = {
    name : '',

}
const SignInForm = () => {
    const [formFields, setFormFields ]= useState(defaultFormFields);
    const {name} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submitted");

        resetFormFields();
        

    };

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields, [name]: value})
    }


    return (
    <div className="sign-up-container">
       
        <form onSubmit={handleSubmit}>
            
            <FormInput   label = "Name" type= "name" required name="name" value={name} onChange={handleChange}/> 
 
            <div className="buttons-container">
                <button type="submit">Sign in</ button>
            </div>
        </form>
    </div>
    )
}

export default SignInForm; 