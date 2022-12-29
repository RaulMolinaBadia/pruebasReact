import CreatorComponents from '../Creator/Creator'

import React, { useState } from 'react'

export const AdderRemover = ({ name, parameters}) => {
  // El componente no puede estar dentro de un componente extenrno y cada vez del + tengo que crear el componente y luego por separado al lado los botones que me hagan falta
  const containerAdderRemover = []
  const containerComponents = []
  const [ComponentsListState, setComponentsListState] = useState([
    containerComponents,
    containerAdderRemover
  ])
  const newComponent = CreatorComponents(name, parameters)
  let key = 0
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
    containerComponents.push({ ...newComponent, key: key++ })
    containerAdderRemover.push(newAdderRemover)
    setComponentsListState([containerComponents, containerAdderRemover])
  }
  console.log(ComponentsListState)
  const removeComponent = e => {}
  return (
    <div className='a'>
      <button
        className='initialButton'
        onClick={e => {
          addComponent(e)
        }}
      >
        +
      </button>
      <button
        className='initialButton'
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
