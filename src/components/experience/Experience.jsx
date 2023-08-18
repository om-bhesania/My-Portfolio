





import React from 'react'
import './experience.css'
import {
  BsPatchCheckFill,
  BsInstagram,

} from 'react-icons/bs'
import {
  SiRedux,
  SiCss3,
  SiNextdotjs,
  SiBootstrap,
  SiPython,
  SiDjango,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiGithub,
  SiReact,
  SiVuedotjs,
  SiMysql,
  SiMongodb
} from "react-icons/si";
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>

              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>

              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>

              </div>
            </article>
            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>

              </div>
            </article>
            <article className='experience__details'>
              <SiGithub className='experience__details-icon' />
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiDjango className='experience__details-icon' />
              <div>
                <h4>Django</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiVuedotjs className='experience__details-icon' />
              <div>
                <h4>Vue</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiNextdotjs className='experience__details-icon' />
              <div>
                <h4>Nextjs</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiNextdotjs className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDb</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
