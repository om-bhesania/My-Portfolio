import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'

import Portfolio from './components/portfolio/Portfolio'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ReactGA from 'react-ga'

class App extends Component {
  setGA = () => {
    ReactGA.initialize('G-JSZ3GTX4RJ');
    ReactGA.pageview('Init page view');
  };
  componentDidMount(){
    this.setGA();
  }
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>
    
  )
}

export default App
