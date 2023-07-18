import React from 'react'
import { news } from '../utils/newsInfo'

const NewsComp = () => {
  return (
    <div className="flex items-center justify-center h-screen max-w-customnews ml-customml">
      <div className="grid grid-cols-2 gap-2">
        {news.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center text-rem2 bg-white p-4 rounded-3xl shadow-xl text-center">
            <img src={item.image} className="max-w-full h-auto" style={{ maxHeight: '200px' }} />
            <h1 className="font-semibold text-custom-title">{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsComp