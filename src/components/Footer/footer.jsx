import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function footer() {
  return (
    <footer>
      <h5 className='footer_logo'>Made with love &#10084; By d1pt0</h5>
      <div className='footer_socials'>
        <a href='https://www.facebook.com/diptadip.mallik' target='_blank' rel='noreferrer'><BsFacebook/></a>
        <a href='https://www.instagram.com/_._d1pt0_._/' target='_blank' rel='noreferrer'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/diptadip-mallik-80445498/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/Diptadip' target='_blank' rel='noreferrer'><BsGithub/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; d1pt0</small>
      </div>
    </footer>
  )
}

export default footer