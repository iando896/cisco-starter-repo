import React from 'react'
import { Banner, Exhibit, DisplayIP } from './components';

const App = () => {
  return (
    <div className={"bg-primary w-full h-[400px]"}>
      <div className="bg-primary justify-between w-full mt-[100px]"> 
        <Banner bannerText="Sextant"/>
        <Exhibit name="IP info"> 
          <DisplayIP ipv4={true}></DisplayIP>
          <DisplayIP ipv4={false}></DisplayIP>
        </Exhibit>
      </div>
    
      
      
      
    </div>
  )
}

export default App
