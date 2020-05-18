import React from 'react';
import { ButtonWrapper, ButtonContent } from './Button.style';

const Button = ({option, type, children}) => {
    return <ButtonWrapper option={option} type={type}>
        <ButtonContent>
            {children}
        </ButtonContent>
    </ButtonWrapper>
}

export default Button;