import React from 'react';


import './app-search-panel.css';

export default class AppSearchPanel extends React.Component {

    render() {
        return (
            <form method="GET" action="/search" className="search-panel">
                <input 
                    onChange={this.handleChange} 
                    type="text"
                    name="q"
                    placeholder="Enter here"
                    className="search-input"
                    required
                />
                    <button
                        type="submit"
                        className="search-button"
                    >Search</button>
            </form>
        )
    }   
}
