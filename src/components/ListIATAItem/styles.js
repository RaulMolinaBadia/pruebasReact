import styled from '@emotion/styled'

export const ListIATAItemContainer = styled.div`
  display: grid;
  grid-template-areas:
  'img iata city country'
  'img airport airport airport';
border: 1px solid white;
align-items: center;
background-color: white;
padding: 0.5em;
width: fit-content;
height: fit-content;
`
export const Icon = styled.img`

`

export const Iata = styled.p`
grid-area: iata;
font-size: 0.9em;
color: rgb(24, 138, 184);
margin-right: 0.3em;
`

export const City = styled.p`
grid-area: city;
font-size: 0.9em;
color: black;
margin-right: 0.3em;
`

export const Country = styled.p`
grid-area: country;
font-size: 0.9em;
color: black;
margin-right: 0.3em;
`

export const Airports = styled.p`
grid-area: airport;
font-size: 0.6em;
color: grey;
text-align: left;
`
