import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const cardsData = [
    {
      id: 1,
      image: './img/1.png',
      title: 'Branches',
      description: 'Abstract Branches lets you manage, version, and document your designs in one place.'
    },
    {
      id: 2,
      image: './img/2.png',
      title: 'Manage your account',
      description: 'Configure your account settings, such as your email, profile details, and password.'
    },
    {
      id: 3,
      image: './img/3.png',
      title: 'Manage organizations, teams, and projects',
      description: 'Use Abstract organizations, teams, and projects to organize your people and your work.'
    },
    {
      id: 4,
      image: './img/4.png',
      title: 'Manage billing',
      description: 'Change subscriptions and payment details.'
    },
    {
      id: 5,
      image: './img/5.png',
      title: 'Authenticate to Abstract',
      description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.'
    },
    {
      id: 6,
      image: './img/6.png',
      title: 'Abstract support',
      description: 'Get in touch with a human.'
    },
  ]

  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        {cardsData.map((item)=>(
          <Card
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          />
        ))}
      </main>
      <Footer />
    </div>


  )
}

export default App
