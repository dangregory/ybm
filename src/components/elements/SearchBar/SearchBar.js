import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.scss';

class SearchBar extends Component {
    state = {
        value: ''
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value);
        }, 500);
    }

    render() {
        return (
            <div className="ybm-searchbar">
                <div className="ybm-searchbar-content">
                    <FontAwesome className="ybm-fa-search" name="search" size="2x" />
                    <input
                        type="text"
                        className="ybm-searchbar-input"
                        placeholder="Search"
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;