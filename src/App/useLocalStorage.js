import React, { useState, useEffect } from "react"


function useLocalStorage(itemName, initialValue ) {

  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))
  const {
    item,
    loading,
    error,
  } = state;

  // ACTION CREATORS

  const onError = (item) => dispatch({
    type: actionTypes.error,
    payload: item
  })

  const onSuccess = (item) => dispatch({
    type: actionTypes.success, 
    payload: item
  })
  const onSave = (item) => dispatch({
    type: actionTypes.save, 
    payload: item,

  })
  

  

  useEffect(() => {
   setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItem
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        onSuccess(parsedItem)
      }catch(error) {
        onError(error)
      }
   }, 500)
    }, [itemName, initialValue])

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      onSave(newItem)
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    }
  
  }



const initialState = ({ initialValue }) => ({
  item: initialValue,
  loading: true,
  error: false
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE'
}

const reducerObject = (state, payload) =>({
  [actionTypes.error] : {
    ...state,
    error: true
  },
  [actionTypes.success] : {
    ...state,
    error:false,
    success:true,
    loading:false,
    item: payload,
  },
  [actionTypes.save] : {
    ...state,
    item: payload
  }

})

const reducer = (state, action) =>{
  return reducerObject(state, action.payload)[action.type] || state
}

export {useLocalStorage}