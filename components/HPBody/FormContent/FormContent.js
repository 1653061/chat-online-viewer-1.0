import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Title from './Title';
import { FormContentWrapper, TextWrapper } from './FormContent.style';

const FormContent = ({}) => {
    const [signin, setSignin] = useState(true);

    const handleClicked = () => {
        setSignin(!signin);
    }

    return <FormContentWrapper>
        <Title />
        {signin ?  
            (<>
                <SignInForm />
                <TextWrapper forgot={true}><a>Forgot password?</a></TextWrapper>
                <TextWrapper>
                    Don't have an account? <a onClick={handleClicked}>Sign Up</a>
                </TextWrapper>
            </>)
            :
            (<>
                <SignUpForm />
                <TextWrapper>
                    Already have an account? <a onClick={handleClicked}>Sign In</a>
                </TextWrapper>
            </>)
        }       
    </FormContentWrapper>
}

export default FormContent;