import * as React from 'react'
import Stack from './Stack'
import DataStack from '../data/stacks.json'

export const Portofolio = () => {
  return (
    <>
      <div className='portfolio-module--portfolio'>
        {/* <Stack data={{ img: 'stack/web.png', link: '/', alt: 'test', title: 'test', description: 'anjay', tags: ['PHP', 'Kotlin'] }} /> */}
        {DataStack.map((stack, index) => {
          return <Stack key={index} data={stack} />
        })
        }
        {/* <div className='portfolio-module--card'> */}
        {/*   <a href='/' */}
        {/*     target="_blank" */}
        {/*     rel="noreferrer" */}
        {/*     className="portfolio-module--hero"> */}
        {/*     <StaticImage */}
        {/*       aria-hidden={true} */}
        {/*       src='../images/stack/os.png' */}
        {/*       alt="Pictune" */}
        {/*       placeholder="blurred" */}
        {/*       layout="fixed" */}
        {/*       width={215} */}
        {/*       height={150} */}
        {/*     > */}
        {/*     </StaticImage> */}
        {/*   </a> */}
        {/*   <div className='portfolio-module--caption'> */}
        {/*     <a href='/' */}
        {/*       target="_blank" */}
        {/*       rel="noreferrer" */}
        {/*       className="portfolio-module--title"> */}
        {/*       Linux */}
        {/*     </a> */}
        {/*     <p */}
        {/*       className="portfolio-module--subtitle"> */}
        {/*       Linux is a family of free and open-source Unix-like operating systems based on the Linux kernel. */}
        {/*     </p> */}
        {/*     <div className="portfolio-module--tags"> */}
        {/*       <span className="portfolio-module--tag">Unix</span> */}
        {/*       <span className="portfolio-module--tag">Operation System</span> */}
        {/*     </div> */}
        {/*   </div> */}
        {/**/}
        {/* </div> */}
      </div>
    </>
  )
}
