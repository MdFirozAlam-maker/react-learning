import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import { Hello , HelloWithoutJSX} from './Hello'
import { Candidateprofile } from './Candidateprofile'

 

const App = () => {

 
  return (
    <div>
      <Hello />
      <HelloWithoutJSX />
      <Candidateprofile />
      <Header />
      <Card title="React Learning" />
      <Card title="Components" />
      <Card title="Props" />
      
    </div>
  )
}

export default App
