import React from 'react'
import './portfolio.css'


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    title: 'Animated Portfolio',
    description: `Portfolio website built with React v18.2, Typescript,  react-router-dom v6, framer-motion, react-icons, Scss`,
    image: 'https://raw.githubusercontent.com/erfjs/animated-portfolio/main/src/assets/example.png',
    GitHub: 'https://github.com/om-bhesania/NextJS-portfolio-website',
    hosted: 'https://github.com/om-bhesania/NextJS-portfolio-website',
  },
 
  {
    title: 'Personalized Card | XYZ~Bank',
    description: `You can personalize your bank card as you want. A very interesting program using only HTML, CSS and JavaScript, with which you can change the card name, color and model`,
    image: 'https://raw.githubusercontent.com/erfjs/ejbank/main/img/example.png',
    GitHub: 'https://github.com/om-bhesania/Card-Personalizer',
    hosted: `https://cardpersonalizer.netlify.app/`,
  },
  {
    title: 'React Todo List',
    description: `A simple to-do list app powered by React, Chakra UI, React icons. Save in Local Storage`,
    image: 'https://github.com/om-bhesania/todo-list/assets/48543687/de7416ec-d27f-4bc8-be19-19e47adfedaa',
    GitHub: 'https://github.com/om-bhesania/todo-list',
    hosted: 'https://react-todo-list-om.netlify.app/',
  },
  {
    title: 'AnimeMania Store',
    description: `Its a Merch store which is made on .liquid from shopify and is also a custom theme created by me and my team`,
    image: 'https://github.com/om-bhesania/todo-list/assets/48543687/4b0b4cd3-1a51-4283-ad43-5a7ae597e2f1',
    GitHub: 'https://github.com/om-bhesania',
    hosted: `https://animemania.in`,
  },
  {
    title: 'Old Portfolio',
    description: `Portfolio website built with React ,  react-router-dom v6,`,
    image: 'https://github.com/om-bhesania/todo-list/assets/48543687/778df80d-b31d-4219-91a6-615e87f7ca74',
    GitHub: 'https://github.com/om-bhesania/My-Portfolio',
    hosted: 'https://ombhesania.netlify.app',
  },
  {
    title:'Other Projects',
    description: `You can check out my other projects on my github profile`,
    image: 'https://moreprojects.fr/content/uploads/2022/03/Logo-com-2-2.png',
    GitHub: 'https://github.com/om-bhesania',
    hosted: 'https://github.com/om-bhesania',
  },

  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, GitHub, hosted,description}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div> <br />
              <h2>{title}</h2>
              <p>{description}</p> <br />
              <div className="portfolio__item-cta">
                <a href={GitHub} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={hosted} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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
