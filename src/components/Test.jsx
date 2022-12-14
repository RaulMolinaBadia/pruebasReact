import React from 'react'
// import { Rojo } from './test'
export const Test = () => {
  const hola = () => {
    let adios = []
    for (let index = 0; index < 10; index++) {
      adios.push(<div key={index}>hola</div>)
    }
    return adios
  }
  return hola()
//   return <Rojo>{hola()}</Rojo>
}
