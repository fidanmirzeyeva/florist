import React, { useContext } from 'react'
import Sect1 from '../../components/Sect1/Sect1'
import Sect2 from '../../components/Sect2/Sect2'
import Sect3 from '../../components/Sect3/Sect3'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainContext } from '../../context/MainProvider';
import Sect4 from '../../components/Sect4/Sect4';

function Home() {

  return (
    <>
     <HelmetProvider>
   
      <Helmet>
        <title>Home</title>
       
      </Helmet>
    
  </HelmetProvider>
    <Sect1></Sect1>
    <Sect2></Sect2>
    <Sect3></Sect3>
    <Sect4></Sect4>
    </>
  )
}

export default Home
