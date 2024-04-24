import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [persons, setPersons] = useState([{
    name: "Tanish",
    job: "Upcoming Software Developer",
    interests: ["Open Source", "Web Dev", "Blockchain"],
    socials: ["LinkedIn", "Twitter"]
  }, {
    name: "Lokeshwar",
    job: "Upcoming Software Developer",
    interests: ["Ionic", "Open Source", "App Dev"],
    socials: ["LinkedIn", "Twitter"]
  }])

  return (
    <div className='w-full h-screen bg-neutral-800 text-white p-3'>
      {persons.map(function(person) {
        return (
          <Card name={person.name} job={person.job} interests={person.interests} socials={person.socials} />
        )
      })}
    </div>
  )
}

export default App
