import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Interior Design App Using AR',
    github: 'https://github.com/om-bhesania/Interior-Design-App-Using-AR.git',
    demo:'https://dribbble.com/shots/18203193-Interior-Designing-App-VIA-Augmented-Reality?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=om-bhesania&utm_content=Interior%20Designing%20App%20VIA%20Augmented%20Reality&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=om-bhesania&utm_content=Interior%20Designing%20App%20VIA%20Augmented%20Reality&utm_medium=Social_Share'
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'OTP Sender And Verifier With GUI ',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18203178-OTP-sender-and-verifier-with-GUI?added_first_shot=true&new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=om-bhesania&utm_content=OTP%20sender%20and%20verifier%20with%20GUI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=om-bhesania&utm_content=OTP%20sender%20and%20verifier%20with%20GUI&utm_medium=Social_Share'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Instagram To Youtube Uploader',
    github: 'https://github.com/om-bhesania/finalapitest.git',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
  id: 5,
  image: IMG4,
  title: 'For More Click Me',
  github: 'https://github.com/om-bhesania',
  demo: 'https://github.com/om-bhesania'
}
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio