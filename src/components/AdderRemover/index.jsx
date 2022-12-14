import ComponentsHelper from '../components.helper'
import React, { useState} from 'react'
import ListIATAItem from '../ListIATAItem/index'
import NavigationItem from '../NavigationItem/index'
import { Prueba } from '../Prueba/index'

export const AdderRemover = ({ name, props }) => {
  console.log(props);
  const [ComponentsListState, setComponentsListState] = useState([])
  const addComponent = e => {
    setComponentsListState([...ComponentsListState, ComponentsHelper(name, {})])
  }
  return (
    <>
      <button onClick={addComponent}>+</button>
      {ComponentsListState}
    </>
  )
}
