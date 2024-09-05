import React from 'react'

const Main = (props) => {
  const {data} =props
  return (
    <div className='imgContainer'>
        <img src={data.hdurl} alt="" className='bg-img'/>
    </div>
  )
}

export default Main