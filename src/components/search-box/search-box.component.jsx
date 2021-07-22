import React from 'react';
import './search-box.styles.css';

// Neu nhieu param thi dung {}
export const SearchBox = ({placeHolder, handleChange}) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeHolder}
            onChange={handleChange}
        />
    );
}