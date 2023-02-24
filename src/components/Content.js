import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Image from './Image'
import { Portofolio } from './Portofolio'

const StyleButton = {
  background: `var(--btn-text)`,
  transition: `all 0.2s ease 0s`
}
const Pages = ({ url, alt, src, isActive }) => {
  return (
    <Link to={url}
      activeStyle={StyleButton}
      className="tabs-module--tab">
      <div className='tabs-module--icon'>
        <Image
          size={24}
          src={src}
          alt={alt}
        />
      </div>
    </Link >
  )
}
const Page = ({ url, alt, src, isActive }) => {
  if (isActive) {
    return (
      <a href={url}
        exac="true"
        style={StyleButton}
        className="tabs-module--tab">
        <div className='tabs-module--icon'>
          <StaticImage
            src="../images/Portfolio.png"
            alt="A dinosaur"
            layout="fixed"
            width={24}
            height={24}
          />
        </div>
      </a>
    )
  } else {
    return (
      <a href={url}
        exac="true"
        className="tabs-module--tab">
        <div className='tabs-module--icon'>
          <Image
            aria-hidden={true}
            src={src}
            alt={alt}>
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "100%" }} />
          </Image>
        </div>
      </a>
    )
  }
}

export const Content = ({ active }) => {
  return (
    <>
      <div className='layout-module--content'>
        <div className='tabs-module--tabs'>
          <Pages url="/" alt="Blog" src="icons/stack.png" isActive={active == "/"} />
          <Pages url="/pencapaian" alt="Achievment" src="Achievment.png" isActive={active == "pencapaian"} />
          <Pages url="/portofolio" alt="Portofolio" src="Portfolio.png" isActive={active == "portofolio"} />
          <Pages url="/portofolio" alt="Portofolio" src="Portfolio.png" isActive={active == "portofolio"} />
        </div>
        <Portofolio />
      </div>
    </>
  )
}
