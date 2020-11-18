import {FaGithub} from "react-icons/fa";

import "./SignIn.css";
import CustomButton from '../custom-button/CustomButton';
import { signInWithGitHub } from '../../firebase/firebase.utils';
import { Fragment } from "react";

const SignIn = () => {
    return (
        <Fragment>
        <div className="signin">
            <CustomButton 
                onClick={signInWithGitHub}
                isGitHubSignIn
            >
                <FaGithub size={25} className="github-icon" /> sign in with github
            </CustomButton>
        </div>
        </Fragment>
    );
};

export default SignIn;