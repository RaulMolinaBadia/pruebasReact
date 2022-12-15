import {
  ListIATAItemContainer,
  Icon,
  Iata,
  City,
  Country,
  Airports
} from './styles'
import { AdderRemover } from '../AdderRemover/index'

const ListIATAItem = ({ iata, city, country, airports, icon = null }) => {
  let iconAlt
  let props = {
    iata: 'iata',
    city: 'city',
    country: 'country',
    airports: 'airports'
  }
  if (icon === 'airport') {
    iconAlt = 'airport'
    icon = process.env.PUBLIC_URL + '/images/TravelportPlane.png'
  } else if (icon === 'city') {
    iconAlt = 'city'
    icon = process.env.PUBLIC_URL + '/images/city.png'
  } else {
    iconAlt = 'icon'
    icon = null
  }

  return (
    <div className='a'>
      <ListIATAItemContainer>
        <Icon
          data-testid='iconImage'
          className='icon'
          src={icon}
          alt={iconAlt}
        />
        <Iata data-testid='iataText' className='iata'>
          {iata}
        </Iata>
        <City data-testid='cityText' className='city'>
          {city}
        </City>
        <Country data-testid='countryText' className='country'>
          {country}
        </Country>
        <Airports data-testid='airportText' className='airport'>
          {airports}
        </Airports>
      </ListIATAItemContainer>
      {/* parameters le tengo que pasar un json ya montado con las props */}
      <AdderRemover name={'listIataItem'} parameters={props} />
      
    </div>
  )
}
export default ListIATAItem
