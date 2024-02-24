import React, { useState, useEffect } from 'react'
import { reviewsData } from './hooks/reviewsData.js'
const Cards = () => {
  const [data, setData] = useState(reviewsData)
  const [review, setReview] = useState(0)

  const nextFunc = () => {
    review < data.length - 1 ? setReview((prev) => prev + 1) : setReview(0)
    console.log(review)
  }
  const prevFunc = () => {
    review > 0 ? setReview((prev) => prev - 1) : setReview(data.length - 1)
  }

  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-zinc-300 flex flex-col text-center items-center justify-center">
        <div>
          {
            <div
              key={data[review].id}
              className="h-[500px] w-[300px] bg-zinc-700 text-white flex flex-col text-center items-center justify-center"
            >
              <h1>{data[review].name}</h1>
              <p>{data[review].review}</p>
            </div>
          }
        </div>
        <div>
          <button
            className=" bg-red-400 text-white w-[150px] h-[40px]"
            onClick={prevFunc}
          >
            prev
          </button>
          <button
            className=" bg-red-400 text-white w-[150px] h-[40px]"
            onClick={nextFunc}
          >
            next
          </button>
        </div>
      </div>
    </>
  )
}

export default Cards
