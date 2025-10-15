import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'

const api = import.meta.env.VITE_API

const CardProvider = ({product}) => {

    const [item , setItem] = useState([])

    useEffect(() => {
    fetch(`${api}/category/${product}`)
    .then(res => res.json())
    .then(data => setItem(data))
  }, [])

  return (
    <div>
      {item.map((pegaItem , index) => (
        <Card title = {pegaItem.title} rate = {pegaItem.rate} image = {pegaItem.image} price = {pegaItem.price} key = {index}/> 
      ))}
    </div>
  )
}

export default CardProvider