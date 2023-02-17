import React from 'react'
import { Banner, Card } from './components';

const App = () => {
  return (
    <div className="bg-primary w-full flex my-[150px]">
      <div className="bg-primary justify-between w-full"> 
        <Banner></Banner>
        <Card></Card>
      </div>
    </div>
  )
}

export default App
