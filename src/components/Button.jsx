import React from 'react'
import './Button.css'
const Button = ({butonunIcindekiDeyer,klasAdi}) => {
  return (
    <button className={klasAdi}>{butonunIcindekiDeyer}</button>
  )
}

export default Button