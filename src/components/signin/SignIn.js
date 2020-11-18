import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGitHub } from '../../firebase/firebase.utils';


const SignIn = () => {
    return (
        <div>
            <CustomButton 
                onClick={signInWithGitHub}
                children="Sign In With GitHub"
            />
        </div>
    );
};

export default SignIn;