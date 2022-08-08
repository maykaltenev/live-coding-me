// 01. Search Input
import { useState, useEffect } from 'react';
// import './App.css';
// const products = ['Banana', 'Apple', 'Orange', 'Mango', 'Watermelon', 'Pineapple']
// function App() {
//   const [search, setSearch] = useState('')
//   // const [filtered, setFiltered] = useState('')
//   const changeHandler = (e) => {
//     setSearch(e.target.value)
//   };
//   // useEffect(() => {
//   //   setFiltered(products.filter(item =>
//   //     item.toLowerCase().includes(search.toLowerCase())));
//   // }, [search]);

//   return (
//     <>
//       <label>Search</label>
//       <input onChange={changeHandler} type="text" value={search} placeholder='Choose your product...'></input>
//       <div>
//         {products
//           .filter(item =>
//             item.toLowerCase().includes(search.toLowerCase()))
//           .map((product, i) => (
//             <p key={i}>{product}</p>
//           ))}
//       </div>
//     </>
//   )
// }

// export default App;

// Simple Counter
// function App() {
//   const [count, setCount] = useState(0)
//   const incrementHandler = (e) => {
//     setCount(count + 1)
//   };
//   const decrementHandler = (e) => {
//     setCount(count - 1)
//   };


//   return (
//     <>
//       <button onClick={incrementHandler}>+</button>
//       <div className={count >= 0 ? 'normal' : 'negative'}>{count}</div>
//       <button onClick={decrementHandler}>-</button>
//     </>
//   )
// }

// display a list 
const list = [
  { title: 'Amazing Dinner', author: 'Visocki', year: 2002, },
  { title: 'Perfect Lunch', author: 'Maciavelli', year: 1598 },
  { title: 'Hard Snack', author: 'Pollan', year: 1888 }
]
function App() {
  const [data, setData] = useState(list)
  return (
    <>
      {data.map((item, i) => (
        <div key={i}>
          <p>{item.title}</p>
          <p>{item.author}</p>
          <p>{item.year}</p>
          <hr />
        </div>
      ))
      }

    </>
  )
}

export default App;