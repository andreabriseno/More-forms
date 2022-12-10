import React, { useState } from 'react';

const Form = (props) => {
    const [fname, setFName] =useState("");
    const [lname, setLName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [conPassword, setConPassowrd]= useState("");
    const [ hasHasBeenSubmitted, setHasBeenSubmitted]=useState(false);

    const [fnameError, setFNameError] = useState("");
    const [lnameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPasswordError, setConPasswordError] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let errors = 0;

        if(fname.length < 3) {
            setFNameError ("Name has to be more than two characters")
            errors++;
        } else{
            setFNameError("");
        }
        if(lname.length < 3) {
            setLNameError ("Last name has to be more than two characters")
            errors++;
        } else{
            setLNameError("");
        }
        if(email.length < 5) {
            setEmailError ("Name has to be more than two characters")
            errors++;
        } else{
            setEmailError("");
        }
        if (password != conPassword){
            setPasswordError("Passwords do not match")
            errors++;
        } else{
            setPasswordError("");
        }
        if (errors < 1){
            setFName("");
            setLName("");
            setEmail("");
            setPassword("");
            setConPassowrd("");
    }

        //setHasBeenSubmitted(true);
    };

    return(
        <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label> First Name: </label>
                <input type='text' value={fname} onChange={ (e) => setFName(e.target.value)}/>
                {fnameError.length > 0 ? fnameError : "" }
            </div>
            <div>
                <label> Last Name: </label>
                <input type='text' value= {lname} onChange={ (e) => setLName(e.target.value)}/>
                {lnameError.length > 0 ? lnameError : "" }
            </div>
            <div>
                <label> Email: </label>
                <input type='text' value= {email} onChange={ (e) => setEmail(e.target.value)}/>
                {emailError.length > 0 ? emailError : "" }
            </div>
            <div>
                <label> Password: </label>
                <input type='text' value={password} onChange={ (e) => setPassword(e.target.value)}/>
                {passwordError.length > 0  ? passwordError : "" }
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type='text' value={conPassword} onChange={ (e) => setConPassowrd(e.target.value)}/>
                {conPasswordError.length > 0 ? conPasswordError : "" }
            </div>
            <button type="submit"> Submit </button>
        </form>
            <div>
                <h3> Your Form Data </h3>
                <h3> First name: {fname} </h3>
                <h3> Last name: {lname} </h3>
                <h3> Email: {email} </h3>
                <h3> Password: {password} </h3>
                <h3>Confirm Password: {conPassword} </h3>
            </div>

        </div>
    )
};

export default Form;