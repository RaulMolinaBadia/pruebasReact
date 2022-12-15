import React from 'react'
import { AdderRemover } from '../AdderRemover/index'


export const Prueba = (props) => {

  return (
    <div className='a'>
        {props.text}
        <AdderRemover />
    </div>
  )
}
