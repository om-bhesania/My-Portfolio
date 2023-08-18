import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward, FaStackOverflow } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaStackOverflow className='about__icon' />
              <h5>Freelancer</h5>
              <small>2 Years</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ </small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Job Experience</h5>
              <small>3 Internships </small>
            </article>
          </div>

          <p>
            i am a passionate web developer and a freelance software engineer from india. my passion for software lies with dreaming up ideas and making them come true with elegant interfaces. i take great care in the experience, architecture, and code quality of the things I build.

            i am also an open-source enthusiast and maintainer. i learned a lot from the open-source community and i love how collaboration and knowledge sharing happened through open-source.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About