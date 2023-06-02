import { Link } from 'gatsby'
import * as React from 'react'
import Coming from './Coming'
import ImageStatic from '../helper/ImageStatic'
import { Stacks } from './Stack'
import Blogs from './Blogs'
import { Pencapaian } from './Pencapaian'
import About from './About'
import { Link as Lk } from 'react-router-dom'

const StyleButton = {
  background: `var(--btn-text)`,
  transition: `all 0.2s ease 0s`
}
const Pages = ({ url, alt, src }) => {
  return (
    <Link to={url}
      activeStyle={StyleButton}
      preventScrollReset={true}
      className="tabs-module--tab">
      <div className='tabs-module--icon'>
        <ImageStatic
          size={24}
          src={src}
          alt={alt}
        />
      </div>
    </Link >
  )
}

export const Content = ({ active }) => {
  return (
    <>
      <div className='layout-module--content'>
        <div className='tabs-module--tabs'>
          <Pages url="/" alt="About me" src="icons/me.png" />
          <Pages url="/blog" alt="Blog" src="icons/blogging.png" />
          <Pages url="/pencapaian" alt="Achievment" src="icons/achievement.png" />
          <Pages url="/portofolio" alt="Portofolio" src="Portfolio.png" />
          <Pages url="/skill" alt="Stack" src="icons/stack-overflow.png" />
        </div>
        {active === "/" || active === "main" && <About />}
        {active === "blog" && <Blogs />}
        {active === "pencapaian" && <Pencapaian />}
        {active === "portofolio" && <Stacks />}
        {active === "skill" && <Stacks />}

      </div>
    </>
  )
}
