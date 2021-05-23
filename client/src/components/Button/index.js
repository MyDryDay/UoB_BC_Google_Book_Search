import React from 'react';

const Button = ({className, children, onClick}) => {
    return (
        <button onClick={onClick} className={['btn btn-lg btn-md btn-sm btn', className].join('')}>
            {children}
        </button>
    )
}

export default Button;