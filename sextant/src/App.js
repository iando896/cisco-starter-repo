import React from 'react'
import { Banner, Exhibit, DisplayIP, Latency } from './components';

const App = () => {
  return (
    <div className={"bg-primary w-full h-[400px]"}>
      <div className="bg-primary justify-between w-full mt-[100px] "> 
        <Banner bannerText="Sextant"/>
        <div className='space-y-[50px]'>
          <Exhibit name="IP info"> 
            <DisplayIP ipv4={true}/>
            <DisplayIP ipv4={false}/>
          </Exhibit>
          <Exhibit name="Latency"> 
            <Latency></Latency>
          </Exhibit>
        </div>
      </div>
    </div>
  )
}

export default App
