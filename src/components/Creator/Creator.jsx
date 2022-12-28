import React from 'react'
import ListIataItem from '../ListIataItem'
import NavigationItem from '../NavigationItem'
import {Prueba} from '../Prueba'

const Components = {
  listIataItem: ListIataItem,
  navigationItem: NavigationItem,
  prueba: Prueba
}
export default (componentName, props) => {
  if (typeof Components[componentName] !== 'undefined') {
    return React.createElement(Components[componentName], {
        ...props
      })
  }
}
