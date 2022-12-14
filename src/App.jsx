import './App.css'
import { AdderRemover } from './components/AdderRemover/index'
import { Prueba } from './components/Prueba/index'
import ListIATAItem from './components/ListIATAItem/index'
import NavigationItem from './components/NavigationItem'

export const App = props => {
  const PropsComponents = {
    listIataItem: {
      // key: ,
      iata: 'iata',
      city: 'city',
      country: 'country',
      airports: 'airports'
    },
    navigationItem: {
      // key: undefined,
      id: '0',
      name: 'name',
      isSelected: 'isSelected',
      onChange: 'onChange'
    },
    prueba: {
      // key: undefined,
      text: 'prueba'
    }
  }
  return (
    <div className='hola'>
      <Prueba text='prueba' />
      <AdderRemover name='prueba' parameters={PropsComponents.prueba} />

      <ListIATAItem />
      <AdderRemover name='listIataItem' parameters={PropsComponents.listIataItem} />

      <NavigationItem />
      <AdderRemover name='navigationItem' parameters={PropsComponents.navigationItem} />
    </div>
  )
}
