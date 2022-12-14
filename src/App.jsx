import './App.css'
import { AdderRemover } from './components/AdderRemover/index'
import { Prueba } from './components/Prueba/index'
import ListIATAItem from './components/ListIATAItem/index'



export const App = (props) => {

  return (
    <div className='hola'>
      <Prueba text='prueba'/>
      <ListIATAItem/>
    </div>
  )
}
