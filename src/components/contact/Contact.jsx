import React from 'react'
import './contact.css'
import mails from '../../assets/images/mails.svg'
import telephone from '../../assets/images/telephone.svg'
import location from '../../assets/images/location.svg'
import links from '../../assets/images/links.svg'
import CustomCheckbox from '../customCHeckbox/CustomCHeckbox'

const About = () => {


  return (
    <section className='contact__page' >
      <div className="container__form">
        <div className="contact__wrapper">
          <div>
            <h2 className='contact__title' >
              Les’t talk  <br />
              on something <span className='contact__span' >great <br /></span>
              together
            </h2>
            <div className='contacts' >
              <div className='contacts__wrapper' >
                <img src={mails} alt="" />
                <p className='contacts__text' >
                  andreaDesign@gmail.com
                </p>
              </div>
              <div className='contacts__wrapper' >
                <img src={telephone} alt="" />
                <p className='contacts__text' >
                  +34 123 456 789
                </p>
              </div>
              <div className='contacts__wrapper' >
                <img src={location} alt="" />
                <p className='contacts__text' >
                  123 Street 487 House
                </p>
              </div>
            </div>
            <img src={links} alt="" />
          </div>
          <form className='contact__form' >
            <p className='froms__interest' >
              I'm interested in:
            </p>
            <div>
              <div className="customCheck">
                <CustomCheckbox label="UX/UI design" />
                <CustomCheckbox label="Web design" />
                <CustomCheckbox label="Design system" />
                <CustomCheckbox label="Graphic design" />
                <CustomCheckbox label="Other" />
              </div>
              <div className='form__input' >
                <p className='input__text' >
                Your name
                </p>
                <input className='form__input-text' placeholder='Jhon Smith'  type="text" />
              </div>
              <div className='form__input' >
                <p className='input__text' >
                Your email
                </p>
                <input className='form__input-text' placeholder='email@gmail.com'  type="text" />
              </div>
              <div className='form__input' >
                <p className='input__text' >
                Your message
                </p>
                <textarea   className='form__input-textarea'></textarea>
              </div>
            </div>
            <button className='contact__btn' type='submit' >Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default About