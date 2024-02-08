import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><GrLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://dribble.com" target="_blank"><MdEmail/></a>


    </div>
  )
}

export default HeaderSocials