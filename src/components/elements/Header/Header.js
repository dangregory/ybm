import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="ybm-header">
            <div className="ybm-header-content">
                <img className="ybm-logo" src="./images/reactMovie_logo.png" alt="ybm-logo" />
                <img className="ybm-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
            </div>
        </div>
    )
}

export default Header;