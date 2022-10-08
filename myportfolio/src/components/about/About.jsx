import React from 'react'
import './about.css'
import ME from '../../Assets/sampling-water.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {FaFolderMinus} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />

          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward/>
            <h5>Experince</h5>
            <small>No Industry Level</small>
            </article>

            <article className='about__card'>
              <FaUserFriends/>
            <h5>Clients</h5>
            <small>Not Yet</small>
            </article>

            <article className='about__card'>
              <FaFolderMinus/>
            <h5>Projects</h5>
            <small>5+ Projects</small>
            </article>
          </div>

        </div>
      </div>


    </section>
  )
}

export default About
