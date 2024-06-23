import React from 'react'
import Hero from '../Componenets/Hero'
import Biography from '../Componenets/Biography'
import MessageForm from '../Componenets/MessageForm'
import Departments from '../Componenets/Departments'

const Homes = () => {
  return (
  <>
   <Hero title={"Welcome to SinghCare Medical  | Your tursted HealthCare"} imageUrl={"/hero.png"}/>
   <Biography imageUrl={"/about.png"}/>
   <Departments/>
   <MessageForm/>
  </>
  )
}

export default Homes