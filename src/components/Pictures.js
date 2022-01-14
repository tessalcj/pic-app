import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Picture from './Picture'
import { io } from 'socket.io-client'

export default function Pictures() {
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    const socket = io('ws://localhost:5000')

    socket.on('connnection', () => {
      console.log('connected to server');
    })

    socket.on('order-added', (newPictures) => {
      setPictures(newPictures)
    })

    socket.on('message', (message) => {
      console.log(message);
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnecting');
    })

  }, [])
  
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get('http://localhost:5000/orders')
      const pictureData = response.data;
      setPictures(pictureData)
    } 

    getPictures()
  }, [])

  return (
    <div className='orders-list'>
      {orders && orders.map(order => {
        return <div key={order._id}> <Order order={order}/> </div>
      })}
    </div>
  )
}