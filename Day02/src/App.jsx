import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import { Hello , HelloWithoutJSX} from './Hello'
import { Candidateprofile } from './Candidateprofile'
import Welcome from './Welcome'
import Product from './Product'
import CandidateCard from './components/CandidateCard'

 

const App = () => {

 
  return (
    <div>
      {/* <Product title="Gaming laptop" price={1299.99} inStock={true} categories={["Electronics","Computers","Gaming"]} />
      <Welcome name="firoz" alias="Batman"/>
      <Welcome name="noor" alias="superman"/>
      <Welcome name="samsudin" alias="loki"/>
      <Hello />
      <HelloWithoutJSX />
      <Candidateprofile />
      <Header />
      <Card title="React Learning" />
      <Card title="Components" />
      <Card title="Props" /> */}
      
      <CandidateCard name="Md Firoz Alam" role="Frontend Developer" experience={5} isAvailable={true} skills={["React", "Javascript","CSS","HTML"]}/>

      <CandidateCard name="Md Noor Alam" role="Full Stack Developer" experience={5} isAvailable={true} skills={["React","Node.js","Express.js","MySQL","JavaScript","Tailwind"]}/>

      <CandidateCard name="Samsuddin" role="Software Enginner" experience={0} isAvailable={false} skills={["React","Node.js","Express.js","MySQL","JavaScript","Tailwind","CI&CD"]}/>

    </div>
  )
}

export default App
