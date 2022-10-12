import React, { useEffect, useState } from 'react'
import axios from '../util/axiosInstance';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {

    const [listTodos, setListTodos] = useState([]);

    const getListTodos = async () => {
        try {
            const res = await axios.get('/api/todo/list');

            setListTodos(res.data);

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