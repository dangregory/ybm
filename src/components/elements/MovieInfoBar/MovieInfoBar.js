import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../../helpers.js';
import './MovieInfoBar.scss'

const MovieInfoBAr = (props) => {
    return (
        <div className="ybm-movieinfobar">
            <div className="content">
                <div className="col">
                    <FontAwesome className="fa-time" name="clock-o" size="2x" />
                    <span className="info">Running time: {calcTime(props.time)}</span>
                </div>
                <div className="col">
                    <FontAwesome className="fa-budget" name="money" size="2x" />
                    <span className="info">Budget: {convertMoney(props.budget)}</span>
                </div>
                <div className="col">
                    <FontAwesome className="fa-revenue" name="ticket" size="2x" />
                    <span className="info">Revenue: {convertMoney(props.revenue)}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoBAr;