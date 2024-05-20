import React, { useContext, useEffect, useState } from "react";
import "./Sect3.scss";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/MainProvider";
function Sect3() {
  const [products, setProducts] = useState([]);
  const {addBasket}=useContext(MainContext)
  useEffect(() => {
    ShowProducts();
  }, []);
  async function ShowProducts() {
    const res = await fetch("http://localhost:7000/f");
    const data = await res.json();
    setProducts(data);
  }

  return (
    <>
      <div className="sect3_hero">
      <div className="sect3">
      <div className="sect3_hero_basliq">
          <h5>OUR FLOWER</h5>
          <h3>New Arrivals</h3>
        </div>
        <div className="sect3_hero_products">
          
          {products.map((x) => (
            <div key={x.id} className="products">
              <img src={x.image} alt="" />
              <h3>{x.name}</h3>
              <p>${x.price}</p>
              <button onClick={()=>addBasket(x)} >Add Basket</button>
              <button ><Link to={`/detail/${x._id}`}>Detail</Link> </button>
              
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Sect3;
