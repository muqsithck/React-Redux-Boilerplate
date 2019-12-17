import React from 'react'
import "./App.css"
import { Provider } from 'react-redux'
import store from './redux/store'
import MyComponent from './components/myComponent'

const App = () => {
   return (
      <div className='body-wrapper'>
         <Provider store={store}>   {/* The <Provider /> makes the Redux store available to any nested components.*/}
            <MyComponent />   {/* Custom component */}
         </Provider>
      </div>
   ) 
}

export default App
