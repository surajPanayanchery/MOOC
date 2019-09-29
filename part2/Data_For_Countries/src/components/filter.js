import React from 'react'


const Filter = ({ setFilter }) => {

    const filterKey = (event) => { event.preventDefault(); setFilter(event.target.value); }

    return (
        <div>
            Filter Countries <input onChange={filterKey} />
        </div>
    )

}

export default Filter;