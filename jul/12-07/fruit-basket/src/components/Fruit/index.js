import React, { useState } from 'react'
import "./Fruit.css"

const initialState = ["red", "blue", "yellow", "orange", "white"]


export default function Fruit({ fruit, handleDelete }) {
    const [color, setColors] = useState('white')
    const handleChangeColor = () => {
        const newColor = Math.floor(Math.random() * initialState.length)
        setColors(initialState[newColor])
    }
    return (<li style={{ backgroundColor: `${color}` }}>
        {fruit}, color={color}
        <button onClick={handleChangeColor}>Change color</button>
        <button onClick={() => handleDelete(fruit)}>Delete</button>
    </li>
    )
}
