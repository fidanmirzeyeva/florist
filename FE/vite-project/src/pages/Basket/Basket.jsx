import React from 'react'
import { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainContext } from '../../context/MainProvider';

function Basket() {
  const {basket,removeBasket} = useContext(MainContext)
  return (
    <>
    <HelmetProvider>
   <Helmet>
     <title>Basket</title>   
   </Helmet>
</HelmetProvider>

<div className="sect3_hero">
      <div className="sect3">
      <div className="sect3_hero_basliq">
          <h5>OUR FLOWER</h5>
          <h3>New Arrivals</h3>
        </div>
        <div className="sect3_hero_products">
          
          {basket.map((x) => (
            <div key={x.id} className="products">
              <img src={x.image} alt="" />
              <h3>{x.name}</h3>
              <p>${x.price}</p>
              <button onClick={()=>removeBasket(x)} >removeBasket </button>
            
            </div>
          ))}
        </div>
      </div>
      </div>

    </>
  )
}

export default Basket
