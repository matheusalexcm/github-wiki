import React from 'react'
import { ButtuonContainer } from './styles'

function Button({onClick}) {
  return (
    <ButtuonContainer onClick={onClick}>
        Buscar
    </ButtuonContainer>
  )
}

export default Button
