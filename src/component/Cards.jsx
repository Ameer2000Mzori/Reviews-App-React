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
      <div>
        <div>
          {
            <div key={data[review].id}>
              <h1>{data[review].name}</h1>
              <p>{data[review].review}</p>
            </div>
          }
        </div>
        <div>
          <button onClick={prevFunc}>prev</button>
          <button onClick={nextFunc}>next</button>
        </div>
      </div>
    </>
  )
}

export default Cards
