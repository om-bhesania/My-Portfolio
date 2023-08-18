import React from 'react'
import "./jobs.css"


// DO NOT USE THE IMAGES IN PRODUCTION
 const data = [
    {
      title: ' MERN Project Intern | tatvasoft.com',
      date: 'May 2023 - Jun 2023',
      details: [
        'Developed web applications using React, and handled backend on Node.js ', 
        'Also Built a landing page with high speed and high scores in speed test gtmetrix and lighthouse, etc', 
      ],
    },
    {
      title: 'Django Intern | brainybeams.com',
      date: 'May 2023 - Jun 2023',
      details: [
        'Worked with a team of other Intern developers to create an e-commerce website using Django',
        'Created reusable components that were easily maintainable, reducing the time spent on future development by 50%',
      ],
    },
    {
      title: 'UI/UX and React Intern | gurugrace consultancy',
      date: 'Aprill 2021 - dec 2021',
      details: [
        'Worked on Figma to design beautiful User-interfaces',
        'Also Dveloped a lot of components in React from the Figma Designs dering my internship Period',
      ],
    }, 
    {
      title: 'Freelancer ',
      date: 'May 2022 - Oct 2022',
      details: [
        'Worked on Figma to design beautiful User-interfaces',
        'Also Dveloped a lot of components in React from the Figma Designs dering my internship Period',
      ],
    },
  ];


const Jobs = () => {
  return (
    <div className="containerJobs portfolio__container">
        {
          data.map(({ date, title,details}) => {
            return (
              <article className='portfolio__item'>
              <h3>{title}</h3> 
              <h5>{date}</h5>
              <br /> <p>{details}</p>
            </article>
            )
          })
        }
      </div>
  )
}

export default Jobs
