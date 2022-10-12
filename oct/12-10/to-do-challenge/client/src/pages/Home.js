import React, { useEffect, useState } from 'react'
import axios from '../util/axiosInstance';

export default function Home() {

  const [listTodos, SetListTodos] = useState([]);

  const getListTodos = async () => {
    try {
        const res = await axios.get('/api/todo/list');
        
        SetListTodos(res.data.todos);

    } catch (error) {
        console.error("Error happened", error)
    }
  }

  useEffect(() => {
    getListTodos();
  }, [])

  return (
    <>
      
       <ul className="list-group">
        {listTodos.map((todo) => <li key={todo._id} className="list-group-item">{todo.text}</li>)}
          
       </ul>
    </>

  )
}
