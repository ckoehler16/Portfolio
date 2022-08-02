import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        currentPage,
        setCurrentPage,
    } = props;

    return (
        <header className="header">
            <h1 className="header-title">
                Courtney Koehler
            </h1>
            <Nav
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </header>
    );
}

export default Header;