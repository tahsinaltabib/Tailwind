import axios from 'axios'
import React, { useEffect, useState } from 'react' 

const Banner = () => {
  let [data, setData] = useState([]);

  let getData = () => {
    let info = axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
    })
    
  }

  useEffect(() => {
   getData()
  }, [])
  

  return (
    <div className="max-w-[1320px] mx-auto pt-5">
      {data.map(() => (
         <h2>Api</h2>
       ))}
    </div>
  )
}

export default Banner