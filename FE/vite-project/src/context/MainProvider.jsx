import React, { createContext, useState } from 'react'


export const MainContext=createContext()
function MainProvider({children}) {
    const [basket, setBasket] = useState([])
    function  addBasket(item) {
        setBasket([...basket,item])
        
    }
    function removeBasket(item) {
        setBasket([...basket.filter((x)=>x._id !== item._id)])
        
    }

        
    
  return (
<>
<MainContext.Provider value={{basket,addBasket,removeBasket}}>
    {children}
</MainContext.Provider>
</>
  )
  }

export default MainProvider
