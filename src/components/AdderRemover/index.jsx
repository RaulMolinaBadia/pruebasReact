import ComponentsHelper from '../components.helper'
import React, { useState } from 'react'
// import ListIATAItem from '../ListIATAItem/index'
// import NavigationItem from '../NavigationItem/index'
// import { Prueba } from '../Prueba/index'

export const AdderRemover = ({ name, parameters }) => {
  console.log(parameters)
  const [ComponentsListState, setComponentsListState] = useState([])
  // let a = ComponentsHelper(name, {
  //   iata: 'hola',
  //   city: 'fsdfd',
  //   country: 'dsfsdfsd',
  //   airports: 'fsdfsdf'
  // })
  // let b = ComponentsHelper(name, {
  //   iata: 'adios',
  //   city: 'fsdfd',
  //   country: 'dsfsdfsd',
  //   airports: 'fsdfsdf'
  // })

  const addComponent = e => {
    // console.log(a)
    setComponentsListState([
      ...ComponentsListState,
      ComponentsHelper(name, parameters )
    ])
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
      {ComponentsListState}
    </>
  )
}
