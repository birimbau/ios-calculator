import { ButtonStyles } from './Button.styles';
import React from 'react';

export enum ButtonType {
    NUMERIC = 'numeric',
    FUNCTION = 'function',
    OPERATION = 'operation',
}

interface ButtonProps {
    content: string;
    onClick: (e: React.MouseEvent) => void;
    type: ButtonType;
    dataTest?: string;
    className?: string;
    double?: boolean;
    pending?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
    onClick,
    content,
    dataTest,
    className = '',
    type,
    double = false,
    pending = false,
}) => {
    return (
        <ButtonStyles
            data-test={dataTest}
            className={[
                'button-component',
                pending ? 'pending' : '',
                className,
                type,
                double ? 'double' : '',
            ].join(' ')}
            onClickCapture={onClick}
        >
            {content}
        </ButtonStyles>
    );
};

export default Button;
