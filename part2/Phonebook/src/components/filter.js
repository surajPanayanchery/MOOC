import React from 'react'


const Filter = ({ setFilter }) => {

    const filterKey = (event) => { event.preventDefault(); setFilter(event.target.value); }

    return (
        <div className="custom-filter">
           Filter with name <input onChange={filterKey} />
        </div>
    )

}

export default Filter;