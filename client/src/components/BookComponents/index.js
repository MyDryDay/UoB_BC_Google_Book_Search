import React from 'react';

export const Booklist = ({children}) => {
    return (
        <ul className='list-group'>
            {children}
        </ul>
    )
}

export const BookItem = ({
    title,
    authors,
    description,
    image,
    link,
    Button
}) => {
    return (
        <li className='list-group-item'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-4 col-sm-3 col-md-3 col-lg-3'>
                        <img src={image || 'https://via.placeholder.com/100'} alt={title} className='img img-fluid'></img>
                    </div>
                    <div className='col-xs-8 col-sm-9 col-md-9 col-lg-9'>
                        <h4>{title} by {authors}</h4>
                        <p>{description}</p>
                        <Button />
                        <a rel='noreferrer noopener' target='_blank' href={link}>
                            <button className='btn btn-primary viewSave'>View Book</button>
                        </a>
                    </div>
                </div>

                {/* <div className='row'>
                    <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                        <Button />
                        <a rel='noreferrer noopener' target='_blank' href={link}>
                            <button className='btn btn-primary viewSave'>View Book</button></a>
                    </div>

                    
                </div> */}
            </div>
        </li>
    )
}