import React, { useContext } from 'react'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import CounterContextProvider, { CounterContext } from '../../../Context/CounterContext'
import RecentProducts from '../RecentProducts/RecentProducts'
import CatogorySlider from '../CatogorySlider/CatogorySlider'
import MainSlider from '../MainSlider/MainSlider'

export default function Home() {
  
  let {count , setcount , userName , setuserName} = useContext(CounterContext)
  console.log()
  return (
    <div className='continer px-10 py-10' >
<MainSlider></MainSlider>
<CatogorySlider></CatogorySlider>
<RecentProducts></RecentProducts>    
    </div>
    
   
  )
}
