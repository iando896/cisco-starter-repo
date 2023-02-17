import React from 'react'
import { Banner, Card } from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className=""> 
        <Banner></Banner>
      </div>

      <div className="bg-primary"> 
        <Card></Card>
      </div>
    </div>
  )
}

export default App
