import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import { Hello , HelloWithoutJSX} from './Hello'

 

const App = () => {

 
  return (
    <div>
      <Hello />
      <HelloWithoutJSX />
      <Header />
      <Card title="React Learning" />
      <Card title="Components" />
      <Card title="Props" />
      
    </div>
  )
}

export default App
