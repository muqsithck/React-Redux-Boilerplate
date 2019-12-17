//  Action to update new items to fruits list
export const updateFruitsList = (data) => {
    return {
        type: 'UPDATE_FRUITS_LIST',   // Action type 
        payload: data  // Set new item as action payload
    }
}

