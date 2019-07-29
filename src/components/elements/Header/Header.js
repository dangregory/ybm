import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="ybm-header">
            <div className="ybm-header-content">
                <Link to="/">
                    <img className="ybm-logo" src="./images/ybm_logo.png" alt="ybm-logo" />
                </Link>
                <img className="ybm-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
            </div>
        </div>
    )
}

export default Header;