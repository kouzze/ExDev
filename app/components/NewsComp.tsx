import React from 'react'
import { news } from '../utils/newsInfo'

const NewsComp = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      <div className="flex justify-center items-center h-screen -mt-56">
        {news.slice(0, 3).map((item, index) => (
          <div key={index} className="w-1/3 p-4 border border-gray-300 shadow-md rounded-xl flex flex-col justify-center items-center">
            <img src={item.image} className="max-w-full h-auto" style={{ maxHeight: '200px' }} />
            <h1 className="text-center font-semibold text-2xl">{item.title}</h1>
            <p className="text-center">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center -mt-96">
        {news.slice(3).map((item, index) => (
          <div key={index} className="w-1/3 p-4 border border-gray-300 shadow-md rounded-xl flex flex-col justify-center items-center">
            <img src={item.image} className="max-w-full h-auto" style={{ maxHeight: '200px' }} />
            <h1 className="text-center font-semibold text-2xl">{item.title}</h1>
            <p className="text-center">{item.body}</p>
          </div>
        ))}
      </div>
    </div>


  )
}

export default NewsComp