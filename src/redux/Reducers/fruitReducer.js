// Redux Global State for fruits list
const intialState = {
    fruits: [ 'Apple', 'Bannana', 'Orange' ]
}

// Inital state change, When any appropriate action call invokes. 
const fruitsList = (state = intialState , {type, payload}) => {
    switch(type)
    {
         case  'UPDATE_FRUITS_LIST' :   // Action type 
          return {
             fruits:[...state.fruits, payload] // Inital state changes with new items
          }

          default:
              return{
                  ...state
              }
    }

}

export default fruitsList