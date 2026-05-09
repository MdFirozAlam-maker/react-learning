import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import { Hello , HelloWithoutJSX} from './Hello'
import { Candidateprofile } from './Candidateprofile'
import Welcome from './Welcome'
import Product from './Product'
import CandidateCard from './components/CandidateCard'
import NetflixSeries from './components/NetflixSeries'
import Profile from './components/Profile'
// import "./components/Netflix.css"
import styles from './components/Netflix.module.css'

 

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
{/*       
      <CandidateCard name="Md Firoz Alam" role="Frontend Developer" experience={5} isAvailable={true} skills={["React", "Javascript","CSS","HTML"]}/>

      <CandidateCard name="Md Noor Alam" role="Full Stack Developer" experience={5} isAvailable={true} skills={["React","Node.js","Express.js","MySQL","JavaScript","Tailwind"]}/>

      <CandidateCard name="Samsuddin" role="Software Enginner" experience={0} isAvailable={false} skills={["React","Node.js","Express.js","MySQL","JavaScript","Tailwind","CI&CD"]}/> */}

      <section className='container'>
        <h1 className={styles["card-heading"]}>List of Best Netflix Series</h1>
        <NetflixSeries />
      </section>
      {/* <Profile /> */}

    </div>
  )
}

export default App
