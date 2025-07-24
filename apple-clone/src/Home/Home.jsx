import React from 'react'
import Header from "../Conponents/Header/Header"
import Ipro16 from '../Conponents/Ipro16/Ipro16'
import Iphon16 from '../Conponents/Iphon16/Iphon16'
import Ipad from '../Conponents/Ipad/Ipad'
import Watch from '../Conponents/Watch/Watch'
import Airpods from '../Conponents/Airpods/Airpods'
import MacBookAir from '../Conponents/MacBook Air/MacBook Air'
import Footer from '../Conponents/Footer/Footer'
export default function Home() {
  return (
    <div>
      <Header/>
      <Ipro16/>
      <Iphon16/>
      <Ipad/>
      <Watch/>
      <Airpods/>
      <MacBookAir/>
      <Footer/>
    </div>
  )
}
