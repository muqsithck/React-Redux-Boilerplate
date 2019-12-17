import React from 'react'

const fruitsList = (props) => {
    return (
        <div>
             {
                    props.fruits.length > 0 ?
                         props.fruits.map((fruit, index) => {
                              return (
                                   <ul key={index}>
                                        <li>{fruit}</li>
                                   </ul>
                              )
                         })
                         :
                         null
               }
        </div>
    )
}



export default fruitsList