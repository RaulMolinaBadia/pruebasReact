import React from 'react'
import { ContainerNavitem, IsSelected, IsNotSelected } from './styles.js'

// Navitem Component
const NavigationItem = ({ id = 0, name = 'John Doe', isSelected = false, onChange = null }) => {
  // Function that changes the class of the clicked <NavItem /> to selected
  const select = (e) => {
    if (onChange !== null) {
      onChange(id)
    }
    isSelected = true
  }
  // Returns the component
  return (
    <div>
      {isSelected === true
        ? <ContainerNavitem><IsSelected>{name}</IsSelected></ContainerNavitem>
        : <ContainerNavitem><IsNotSelected onClick={event => { select(event) }}>{name}</IsNotSelected></ContainerNavitem>}
    </div>
  )
}
export default NavigationItem
