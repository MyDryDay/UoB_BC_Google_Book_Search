import React from 'react';

const Button = ({className, children, onClick}) => {
    return (
        <button onClick={onClick} className={['btn btn-lg btn-default', className].join('')}>
            {children}
        </button>
    )
}

export default Button;