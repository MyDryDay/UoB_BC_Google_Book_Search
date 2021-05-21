import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [expanded, setExpanded] = useState(true);
    const expandNav = () => setExpanded(!expanded);

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a className='navbar-brand'>Google Book Search</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarExpand' aria-controls='navbarExpand' aria-expanded={expanded ? true : false} aria-label='Toggle Expand' onClick={expandNav}>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className={`${expanded ? 'collapse' : ''} navbar-collapse`} id='navbarExpand'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link 
                                to='/'
                                className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}    
                            > Search </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                to='/about'
                                className={window.location.pathname === '/saved' ? 'nav-link active' : 'nav-link'}
                            > Saved </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;