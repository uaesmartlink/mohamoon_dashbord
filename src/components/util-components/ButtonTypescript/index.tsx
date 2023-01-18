import { Button } from 'antd'
import React, { MouseEventHandler } from 'react'
//import { buttonStyles } from './Button.styles'
type Props = {
  onClick: MouseEventHandler,
  text: string,
}

const ButtonSubmit = ({ onClick, text }:Props) => (
  <Button onClick={onClick}>
{text}
  </Button>
)

export default ButtonSubmit