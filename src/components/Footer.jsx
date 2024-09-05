import React from 'react'

const Footer = (props) => {
    const {showModel, setshowModel,handletoggleModel,data} =props
  return (
    <footer>
        <div className='bgGradient'></div>
    <div>
        <h2>{data.title}</h2>
        <h1>{data.date}</h1>
    </div>
    <button onClick={handletoggleModel}>
    <i className="fa-solid fa-circle-info"></i>
    </button>
    </footer>
  )
}

export default Footer