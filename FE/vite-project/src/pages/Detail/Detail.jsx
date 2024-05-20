import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Detail() {
  const {id} = useParams()
  
  useEffect(() => {
    showDetail()
  }, [])

  const [detail, setDetail] = useState([])
  
  async function showDetail() {
    const res = await fetch(`http://localhost:7000/f/${id}`)
    const data = await res.json()
    setDetail(data)
    
  }
  
  return (
    <>
         <HelmetProvider>
   
   <Helmet>
     <title>Detail</title>
    
   </Helmet>
 
</HelmetProvider>
    <div className="detail">
   <div className="detail_img">
   <img src={detail.image} alt="" />
   </div>
    <div className="detail_text">
    <h1>{detail.name}</h1>
    <h4>${detail.price}</h4>
    </div>
    </div>
    </>
  )
}

export default Detail
