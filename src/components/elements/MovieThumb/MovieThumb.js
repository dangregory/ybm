import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieThumb.scss';

const MovieThumb = (props) => {
    return (
        <div className="ybm-moviethumb">
            {props.clickable ?
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
                    <img src={props.image} alt="moviethumb" />
                </Link>
                :
                    <img src={props.image} alt="moviethumb" />
            }
        </div>
    )
}

export default MovieThumb;