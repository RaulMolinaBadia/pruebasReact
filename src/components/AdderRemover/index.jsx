import ComponentsHelper from '../components.helper'

import React, { useState } from 'react'

export const AdderRemover = ({ name, parameters, numberCopies = 1 }) => {
  // El componente no puede estar dentro de un componente extenrno y cada vez del + tengo que crear el componente y luego por separado al lado los botones que me hagan falta
  const [ComponentsListState, setComponentsListState] = useState([])
  const newComponent = ComponentsHelper(name, parameters)
  const newAdderRemover = (
    <>
      <button
        onClick={e => {
          addComponent(e)
        }}
      >
        +
      </button>
      <button
        onClick={e => {
          removeComponent(e)
        }}
      >
        -
      </button>
    </>
  )
  const addComponent = e => {
    setComponentsListState([
      ...ComponentsListState,
      (ComponentsListState[ComponentsListState.length] = newComponent),
      newAdderRemover
    ])
    document.querySelectorAll('.initialButton').style.display = "none";
    // setComponentsListState(ComponentsListState.concat(newComponent,newAdderRemover))
  }
  console.log(ComponentsListState)
  const removeComponent = e => {}
  return (
    <div className='a'>
      <button className='initialButton'
        onClick={e => {
          addComponent(e)
        }}
      >
        +
      </button>
      <button className='initialButton'
        onClick={e => {
          removeComponent(e)
        }}
      >
        -
      </button>
      {ComponentsListState}
    </div>
  )
}
