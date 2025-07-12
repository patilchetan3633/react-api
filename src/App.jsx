import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const getdataFromServer = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdataFromServer()
  }, [])


  return (
    <div className="App">
      <h1>posts below</h1>
      <hr />
      {posts.map((el, i) => (
        <div>
          <p>{el.id}</p>
          <p>{el.title}</p>
          <p>{el.body}</p>

        </div>
      ))}

    </div>
  )
}


