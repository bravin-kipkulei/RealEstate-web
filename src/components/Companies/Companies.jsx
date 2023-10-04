import React from 'react'
import "./Companies.css"
      //images
import prologis from "../../Assets/prologis.png"
import tower from "../../Assets/tower.png"
import equinix from "../../Assets/equinix.png"
import realty from "../../Assets/realty.png"

const Companies = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
               <img src={prologis} alt="" />
               <img src={tower} alt="" />
               <img src={equinix} alt="" />
               <img src={realty} alt="" />
        </div>
    </section>
  )
}

export default Companies
