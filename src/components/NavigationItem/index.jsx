import React from 'react'
import { ContainerNavitem, IsSelected, IsNotSelected } from './styles.js'
import { AdderRemover } from '../AdderRemover/index'

// Navitem Component
const NavigationItem = ({ id = 0, name = 'John Doe', isSelected = false, onChange = null }) => {
  let props = {
    id: '0',
    name: 'name',
    isSelected: 'isSelected',
    onChange: 'onChange'
  }
  const select = (e) => {
    if (onChange !== null) {
      onChange(id)
    }
    isSelected = true
  }
  // Returns the component
  return (
    <div className='a'>
      {isSelected === true
        ? <ContainerNavitem><IsSelected>{name}</IsSelected></ContainerNavitem>
        : <ContainerNavitem><IsNotSelected onClick={event => { select(event) }}>{name}</IsNotSelected></ContainerNavitem>}
      {/* <AdderRemover name={'navigationItem'} parameters={props} /> */}
    </div>
  )
}
export default NavigationItem
