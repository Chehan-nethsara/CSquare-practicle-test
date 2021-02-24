import React, {useContext,useState} from 'react'
import {MyContext} from '../contexts/contexts'

function Register(){
    const {toggleNav,registerEmployee} = useContext(MyContext);
    const initialState = {
        userInfo:{
            FirstName:'',
            LastName:'',
            Address:'',
            MobileNum:'',
            Ciy:''
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerEmployee(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    return(
        <div className="_loginRegister">
            <h1>Sign Up</h1>
            <form onSubmit={submitForm} noValidate>
                <div className="form-control">
                    <label>First Name</label>
                    <input name="FirstName" required type="text" value={state.userInfo.FirstName} onChange={onChangeValue} placeholder="Enter your First Name"/>
                </div>
                <div className="form-control">
                    <label>LastName</label>
                    <input name="LastName" required type="text" value={state.userInfo.LastName} onChange={onChangeValue} placeholder="Enter your Last Name"/>
                </div>
                <div className="form-control">
                    <label>Address</label>
                    <input name="Address" required type="text" value={state.userInfo.Address} onChange={onChangeValue} placeholder="Enter your Address"/>
                </div>
                <div className="form-control">
                    <label>MobileNumber</label>
                    <input name="MobileNum" required type="number" value={state.userInfo.MobileNum} onChange={onChangeValue} placeholder="Enter your Mobile Number"/>
                </div>
                <div className="form-control">
                    <label>City</label>
                    <input name="Ciy" required type="number" value={state.userInfo.Ciy} onChange={onChangeValue} placeholder="Enter your City"/>
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-control">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <div className="_navBtn">
                <button  onClick={toggleNav}>Login</button>
            </div>
        </div>
    );
}

export default Register
