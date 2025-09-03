import axios from 'axios'
import React, { useEffect, useState } from 'react' 

const Banner = () => {
  let [data, setData] = useState([]);

  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
    })
    
  }

  useEffect(() => {
   getData()
  }, [])
  

  return (
  <div className="max-w-[1320px] mx-auto pt-15">
    <div className="flex flex-wrap">
      {data.map((item) => (
        <div className="w-1/3 pb-8">
       
           <h3 className='py-2 px-4 bg-purple-500 inline-block text-white'>{item.id}</h3>
           <h2>{item.title}</h2>
           <img src={item.thumbnail} alt="" />
           <p>{item.description}</p>
           <h5>{item.price}</h5>

        </div>
      ))}
      
    </div>
  </div>
  )
}

export default Banner