import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

// Action
import  { updateFruitsList }  from '../redux/Actions/index'

// Child components
import Add from './addFruits'
import List from './fruitsList'
   
const MyComponent = () => {

     // Fetch fruit list from redux state(Global State) using 'useSelector'
     const fruitReducerState = useSelector(state => state.fruitReducer)  
     const fruits = fruitReducerState.fruits
     
     // Add new items to redux state(Global State) instead of Local State
     const dispatch = useDispatch();
     const handleClick = (item) => {
          dispatch(updateFruitsList(item))  // Action call with new item
     }
     
     // Handle input changes
     const [item, setItem] = useState('item')   // local state using 'useState'
     const handleChange = (e) => {
           setItem(e.target.value)  // change local state
     }
     

     
     return (
          <div className='parant-component-wrapper' >
              <div>
                <p>Total Items : {fruits.length} </p> 
                {/* child components and passing values to child components */}
               <Add handleChange={handleChange} handleClick={handleClick} item={item} />
               <List fruits={fruits}/>
               </div>
          </div>
     )
}

export default MyComponent;
