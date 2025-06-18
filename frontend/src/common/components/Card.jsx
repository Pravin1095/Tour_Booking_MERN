import React from 'react'
import { CardLayout, Description, Title } from './Card.styles'
import { useNavigate } from 'react-router-dom'
const Card=(props)=>{
  const pathname = window.location.pathname;
  const navigate = useNavigate()
  const handleRoute= (queryName)=>{
         console.log("check isCalled",pathname, queryName)
      navigate(`${pathname}/${queryName}`)
  
  }
return (

    <CardLayout onClick={()=>handleRoute(props?.data?.queryName)}>
          <Title>{props?.data?.title}</Title>
          <Description>{props?.data?.description}</Description>
        </CardLayout>
)
}

export default Card