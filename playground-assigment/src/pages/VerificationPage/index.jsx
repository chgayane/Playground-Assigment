import SignUpHalfPage from "../SignUp/SignUpHalfPage";
import styles from './VerificationPage.module.css'; 
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button'; 

const VerificationPage = () => {
   
    const { verification_container, right_container, passcode_input, submit_button } = styles;

    const handleKeyPress = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    };

    return (
        <div className={verification_container}>
            <SignUpHalfPage />
            <div className={right_container}>
                <h3>Login</h3>
                <label>To finalize your verification, please enter the code that has been sent to your email address / SMS</label>
                <div className={passcode_input}>
                    <TextField
                    id="verification-code"
                    label="Verification Code"
                    variant="outlined"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    onKeyPress={handleKeyPress}
                />
                </div>
                <div className={submit_button }>
                    <Button variant="contained">Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default VerificationPage;
