import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import ListIataItem  from './ListIATAItem/index'
import NavigationItem from './NavigationItem/index'
import {Prueba} from './Prueba/index'

const Components = {
  listIataItem: ListIataItem,
  navigationItem: NavigationItem,
  prueba: Prueba
}

export default (componentName, props, children = undefined) => {
  if (typeof Components[componentName] !== 'undefined') {
    if (children === undefined) {
      return React.createElement(Components[componentName], {
        key: uuidv4(),
        ...props
      })
    } else {
      return React.createElement(
        Components[componentName],
        {
          key: uuidv4(),
          ...propsº
        },
        children
      )
    }
  }
  return React.createElement(() => (
    <div>The component {componentName} has not been created yet.</div>
  ))
}
