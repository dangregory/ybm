import React from 'react';
import './FourColGrid.scss';

const FourColGrid = (props) => {

    const renderElements = () => {
        const gridElements = props.children.map( (element, i) => {
            return (
                <div key={i} className="ybm-element">
                    {element}
                </div>
            )
        })
        return gridElements;
    }

    return (
        <div className="ybm-grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="content">
                {renderElements()}
            </div>
        </div>
    )
}

export default FourColGrid;