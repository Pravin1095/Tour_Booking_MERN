import React from 'react'
import { CardLayout, Description, Title } from './Card.styles'

const Card=(props)=>{
return (
    <CardLayout>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </CardLayout>
)
}

export default Card