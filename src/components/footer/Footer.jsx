import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Om Bhesania</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        
        <li><a href="#portfolio">Portfolio</a></li>
        
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/om-bhesania" target="_blank" ><FaGithub/></a>
        <a href="https://instagram.com/om_bhesania" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/bhesania_om" target="_blank"><IoLogoTwitter/></a>
      </div>

    </footer>
  )
}

export default Footer