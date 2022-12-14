import styled from '@emotion/styled'

export const ContainerNavitem = styled.div`
    width: fit-content;
    height: 30px;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    color: black
    position:sticky;
`

export const IsSelected = styled.p`
    border-bottom: 6px solid ${props => props.theme.colors.coral};
color: blue
    `

export const IsNotSelected = styled.p`
    color: black;
    &:hover{
        background-color: grey
    }
`
