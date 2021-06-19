import React from 'react';

const GenreList = (props) => {

    const { items, onItemSelect, textProp, valueProp, selectedItem} = props;

    return (
        <ul className="list-group">
            {items.map(genre => <li
            key={genre[valueProp]}
            style={{cursor:"pointer"}}
            onClick={() => onItemSelect(genre)}
            className={genre === selectedItem ? "list-group-item active": "list-group-item"}
            >{genre[textProp]}</li>)}
        </ul>
    )
}

GenreList.defaultProps = {
    textProp : "name",
    valueProp : "_id"
}

export default GenreList;