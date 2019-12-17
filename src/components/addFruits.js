import React from 'react'

const addFruits = (props) => {
    return (
        <div >
            <div>
             <input onChange={props.handleChange} placeholder='Enter New Item' />
             <button onClick={ () => props.handleClick(props.item)}>Add To List</button>
             </div>
        </div>
    )
}

export default addFruits