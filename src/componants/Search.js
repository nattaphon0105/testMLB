import { Component } from 'react';
class Search extends Component {
    render() {
        return (
            <div className="container">
                <div className="search-box">
                    <input className='search'></input>
                    <div className='btn-clear'>Clear</div>
                </div>
            </div>
        );
    }
}

export default Search;