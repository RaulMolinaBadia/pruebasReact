import ComponentsHelper from '../components.helper'
import React, { useState } from 'react'
// import ListIATAItem from '../ListIATAItem/index'
// import NavigationItem from '../NavigationItem/index'
// import { Prueba } from '../Prueba/index'

export const AdderRemover = ({ name, parameters }) => {
  // El componente no puede estar dentro de un componente extenrno y cada vez del + tengo que crear el componente y luego por separado al lado los botones que me hagan falta
  const [ComponentsListState, setComponentsListState] = useState([])

  const addComponent = e => {
  }
  const removeComponent = e => {
  }
  return (
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
      {ComponentsListState}
    </>
  )
}
