import React from 'react';
import './LoadMoreBtn.scss';

const LoadMoreBtn = (props) => {
    return (
        <div className="ybm-loadmorebtn" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
}

export default LoadMoreBtn;