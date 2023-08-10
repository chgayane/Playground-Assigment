import React from 'react'; 
import playground from '../../../assets/playground.svg';
import signUpCover from '../../../assets/images/SignUpCover.png'
import styles from './SignUpHalfPage.module.css'; 

function SignUpHalfPage() {
const {half_page_container, logo, sign_up_cover} = styles;

    return (
        <div className={half_page_container}>
        <div className={logo}>
            <img src={playground} alt='playground' />
        </div>
        <div className={sign_up_cover}>
            <img src={signUpCover} alt='sig up cover' />
        </div>
        </div>
    );
}

export default SignUpHalfPage;
