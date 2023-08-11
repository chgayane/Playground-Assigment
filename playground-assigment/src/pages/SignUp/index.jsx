import SignUpHalfPage from './SignUpHalfPage';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import styles from './SignUp.module.css';
import { useDispatch } from 'react-redux';
import registerUser from '../../redux/Slices/LoginWithCodeSlice';

function SignUp(){
    // const dispatch = useDispatch();
    // handleSendButtonClick= () =>{
    //     dispatch(registerUser(email, code, languageID))
    // }

    const {sign_up_container, left_container, right_container, mailInput, send_code_button } = styles
    return (
        <div className={sign_up_container}>
            <div className={left_container}>
                <SignUpHalfPage />
            </div>
            <div className={right_container}>
                <h3>Login</h3>
                <label>Enter your email</label>
                <div className={mailInput}>
                <TextField id="standard-basic" label="myemail@mail.com" variant="standard"/>  
                </div>
                <div className={send_code_button}>
                <Button variant="contained">Send Code</Button>
                </div>
            </div>
        </div>

    );
}
export default SignUp;