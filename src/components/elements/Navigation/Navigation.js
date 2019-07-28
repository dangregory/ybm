import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = (props) => {
    return (
        <div className="ybm-navigation">
            <div className="content">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>/</p>
                <p>{props.movie}</p>
            </div>
        </div>
    )
}

export default Navigation;